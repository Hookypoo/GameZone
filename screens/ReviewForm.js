import React from "react";
import { Button, TextInput, Text, View } from "react-native";
import { globalStyles } from "../styles/Global";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../shared/Button";

const reviewSchema = yup.object({                   //validation setup using yup
    title: yup.string()
    .required()
    .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test("is-num-1-5", "Rating must be a number between 1-5", (val) => {    //params=name of test, error msg, function T/F
            return parseInt(val) < 6 && parseInt > 0;
        })
})

export default function ReviewForm({ addReview }){
    return (
        <View style={globalStyles.container}>
          <Formik 
              initialValues={{title: "", body: "", rating: "" }}
              validationSchema={reviewSchema}
              onSubmit={(values, actions) => {
                  actions.resetForm();
                  addReview(values);
              }}
          >  
            {(props) => (                                //renders the form......props here refer to the "formikprops" that formik provides
              <View>
                  <TextInput 
                      style={globalStyles.input}
                      placeholder="Review title"
                      onChangeText={props.handleChange("title")}
                      value={props.values.title}
                      onBlur={props.handleBlur("title")}

                  />
                   <Text style={globalStyles.errorText}>{ props.touched.title && props.errors.title}</Text> 

                  <TextInput 
                      multiline
                      style={globalStyles.input}
                      placeholder="Review body"
                      onChangeText={props.handleChange("body")}
                      value={props.values.body}
                      onBlur={props.handleBlur("body")}  
                      />
                  <Text style={globalStyles.errorText}>{ props.touched.body && props.errors.body}</Text>
                  <TextInput 
                      style={globalStyles.input}
                      placeholder="Rating (1-5)"
                      onChangeText={props.handleChange("rating")}
                      value={props.values.rating}    
                      keyboardType="numeric"
                      onBlur={props.handleBlur("rating")}
                  />
                  <Text style={globalStyles.errorText}>{ props.touched.rating && props.errors.rating}</Text>

                  <FlatButton text="submit" onPress={props.handleSubmit}/>
                  
              </View>
              
            )}
          </Formik>
        </View>
    )
}