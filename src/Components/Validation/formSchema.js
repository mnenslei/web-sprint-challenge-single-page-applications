import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Must enter your name')
        .min(3, 'name must be at least 3 characters long'),
    size: yup.string(),
    pepperoni: yup.boolean(),
    mushrooms: yup.boolean(),
    pineapple: yup.boolean(),
    peppers: yup.boolean(),
    special: yup.string()
})

export default formSchema;