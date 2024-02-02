import * as Yup from 'yup';

const registrationSchema = Yup.object().shape({
  personalInfo: Yup.object().shape({
    firstName: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, 'First name should not contain numbers')
      .required('First name is required'),
    lastName: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, 'Last name should not contain numbers')
      .required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
  }),
  businessInfo: Yup.object().shape({
    businessName: Yup.string().required('Business name is required'),
    businessSize: Yup.number().required('Business size is required').min(1, 'Must be at least 1'),
    businessType: Yup.object().shape({
      id: Yup.number().required(),
      name: Yup.string().required()
    }).required('Business type is required'),
    pos: Yup.object().shape({
      id: Yup.number().required(),
      name: Yup.string().required(),
      imageUrl: Yup.string().required(),
    }).required('Point of Sale used is required'),
    deliveryChannel: Yup.object().shape({
      id: Yup.number().required(),
      name: Yup.string().required(),
      imageUrl: Yup.string().required('Delivery channel is required'),
    }),
  })
})


export default registrationSchema;
