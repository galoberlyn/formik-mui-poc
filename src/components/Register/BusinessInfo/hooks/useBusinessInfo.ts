import { useEffect, useState } from "react";
import { http } from "../../../../services/api";
import { AutocompleteOptions } from "../../../../common/components/SearchSelect/types/SearchSelectTypes";
import { FieldProps } from "../../../../common/components/Input/types/InputTypes";

export const useBusinessInfo = (props: FieldProps) => {

  const mode = 'businessInfo';
  const { errors, touched, values, } = props;
  const [loading, setLoading] = useState(true);
  const [deliveryChannels, setDeliveryChannels] = useState<AutocompleteOptions[] | null>(null);
  const [pointOfSaleTypes,setPointofSaleTypes] = useState<AutocompleteOptions[] | null>(null);

  useEffect(() => {
    getDeliveryChannels().then(resp => setDeliveryChannels(resp.data));
    getPointOfSaleTypes().then(resp => setPointofSaleTypes(resp.data));
  }, []);


  const businessTypes = [
    { id: 1, name: 'SMB'},
    { id: 2, name: 'MidMarket'},
    { id: 3, name: 'Enterprise '},
  ];

  const fieldProps = [
    {
      gridSize: 12,
      id: `${mode}.businessName`,
      errorLabel: errors[mode]?.businessName,
      touched: touched[mode]?.businessName,
      value: values[mode]?.businessName,
      label: 'Business name',
      type: 'text',
      fullWidth: true
    },
    {
      gridSize: 6,
      id: `${mode}.businessSize`,
      errorLabel: errors[mode]?.businessSize,
      touched: touched[mode]?.businessSize,
      value: values[mode]?.businessSize,
      label: 'Business size',
      type: 'number',
      fullWidth: true
    }, 
    {
      gridSize: 6,
      id: `${mode}.businessType`,
      errorLabel: errors[mode]?.businessType,
      touched: touched[mode]?.businessType,
      value: values[mode]?.businessType,
      label: 'Business type',
      fullWidth: true,
      options: businessTypes,
      isSelect: true
    },
    {
      gridSize: 12,
      id: `${mode}.pos`,
      errorLabel: errors[mode]?.pos,
      touched: touched[mode]?.pos,
      value: values[mode]?.pos,
      label: 'Point of Sale used by business',
      fullWidth: true,
      options: pointOfSaleTypes,
      isSelect: true
    },
    {
      gridSize: 12,
      id: `${mode}.deliveryChannel`,
      errorLabel: errors[mode]?.deliveryChannel,
      touched: touched[mode]?.deliveryChannel,
      value: values[mode]?.deliveryChannel,
      label: 'Delivery Channel used by business',
      options: deliveryChannels,
      fullWidth: true,
      isSelect: true
    }, 
  ];

  const getPointOfSaleTypes = async () => {

    const data = await http.get('/pos');
    setLoading(false);

    return data;
  }

  const getDeliveryChannels = async () => {

    const data = await http.get('/channel');
    setLoading(false);

    return data;
  }



  return {
    businessTypes,
    deliveryChannels,
    pointOfSaleTypes,
    loading,
    fieldProps
  }
}