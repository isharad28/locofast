import { Button, Flex } from '@chakra-ui/react'
import React,{useEffect} from 'react'
import FormikControl from '../../Formik/FormikControl'
import * as Yup from "yup";
import { Formik, Form } from "formik";
import swal from "sweetalert";
import { useHistory } from 'react-router-dom';
import {products,pricingInfo} from '../../utils/productData'
const ViewProduct = (props) => {
  const{getProductOnBasisOfId,productbyId,location,updateProductOnBasisOfId,productList}=props
  const{state}=location
   const{name,weight,productUrl,pricingTier,availability,priceRange,isEditable,id}=state
   const history = useHistory()
  const initialValues = {
    name: name,
    weight:weight,
    availability: availability,
    productUrl: productUrl,
    pricingTier: pricingTier,
    priceRange:priceRange,
    isEditable:isEditable
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required").matches(/^[A-Za-z0-9 ]+$/, 'Special characters are not allowed'),
    weight: Yup.string().required("Required").matches(/^[A-Za-z0-9 ]+$/, 'Special characters are not allowed'),
    availability: Yup.number()
    .required("Required").nullable(),
    productUrl: Yup.string().required("Required"),
    pricingTier: Yup.string().required("Required"),
    priceRange: Yup.string().required("Required"),
    // .matches(/^[A-Za-z0-9 ]+$/, 'Special characters are not allowed'),
    isEditable:Yup.boolean().required("Required"),

  });
  const onSubmit = (values, onSubmitProps) => {
    values.id=id
    console.log(values)
    updateProductOnBasisOfId(values)
    swal(`Form submitted`, { icon: "success" }).then(
      (res) => {
        history.push('/')
      }
  );

  }
  useEffect(() => {
    getProductOnBasisOfId(2)
  }, [])
  console.log(pricingInfo,state,"pricingInfo")
  const radioOptions=[
    { key:'true', value:'true' ,className:'form-check-input' },
    { key:'false', value:'false',className:'form-check-input'  },
] 
const radioOptionsPriceTier=[
  { key:'budget', value:'budget' ,className:'form-check-input' },
  { key:'premier', value:'premier',className:'form-check-input'  },
] 
  return (
    <Flex justify={"center"} alignItems="center" m="5" p="5">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize={true}

      >

        {(formik) => {
          console.log(formik.values,"formik")
          return (
            <Form>
              <FormikControl
                control="input"
                className="form-control"
                name="name"
                id="name"
                type="text"
                style={{margin:10}}
                placeholder=" Name"
              />
                <FormikControl
                control="input"
                className="form-control"
                name="weight"
                id="weight"
                type="text"
                style={{margin:10}}
                placeholder="Weight"
              />
                <FormikControl
                control="input"
                className="form-control"
                name="availability"
                id="availibility"
                type="text"
                style={{margin:10}}
                placeholder="Availibility"
              />
                <FormikControl
                control="input"
                className="form-control"
                name="productUrl"
                id="productUrl"
                type="text"
                style={{margin:10}}
                placeholder="Product Url"
              />
                <FormikControl
                control="radio"
                options={radioOptionsPriceTier}
                className="form-control"
                name="pricingTier"
                id="pricpricingTiereTier"
                style={{margin:10}}
                type="text"
                placeholder="Price Tier"
              />
               
                 <FormikControl
               control="select"
               className="form-control"
               options={formik.values.pricingTier=='budget'?pricingInfo.budget:pricingInfo.premier}
                name="priceRange"
                style={{margin:10}}
                id="line_1"
                placeholder="Price Range"
              />
              <div>
                <span>Is Editible ?</span>
                  <FormikControl
               control='radio' 
               options={radioOptions}
                name="isEditable"
                style={{margin:10}}
                label="is Editable ?"
                id="line_1"
                placeholder="is Editable"
              />
              </div>
              <Button m="10" type='submit'>SUBMIT</Button>
            </Form>
          )
        }}
      </Formik>
    </Flex>
  )
}

export default ViewProduct