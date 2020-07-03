import React, { useState } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import faker from 'faker'
import { useTheme } from '@react-navigation/native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import {
  Avatar,
  Button,
  Txt,
  Space,
  ButtonStatusIssue,
  ButtonRate,
  ButtonCircle,
  ButtonText,
  ButtonLink,
  ButtonMarkDecision,
  ButtonIconCircle,
  ButtonComments,
  ButtonDeveloperSub,
  Star,
  TabDeveloper,
  TabCompany,
  Input
} from './components'
import { black, white } from './components/constants'

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 65,
    paddingHorizontal: 15
  }
})

const UIKit = () => {
  const [bool, setBool] = useState(false)
  const { scrollView } = styles
  const _onPress = () => console.log('click') // eslint-disable-line
  const { image, name, lorem, random } = faker
  const { dark } = useTheme()
  const dev = true
  return (
    <>
      <ScrollView
        style={[scrollView, { backgroundColor: dark ? black : white }]}
      >
        <View style={{ alignItems: 'center' }}>
          <Txt h0 title="Inputs" />
          <Space height={30} />
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => Alert.alert(JSON.stringify(values))}
            validationSchema={Yup.object().shape({
              email: Yup.string().email().required(),
              password: Yup.string().min(6).required()
            })}
          >
            {({
              values,
              handleChange,
              errors,
              setFieldTouched,
              touched,
              isValid,
              handleSubmit
            }) => (
              <>
                <Input
                  name="email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                  placeholder="E-mail"
                  touched={touched}
                  errors={errors}
                />
                <Input
                  name="password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                  placeholder="Password"
                  touched={touched}
                  errors={errors}
                />
                <Space height={40} />
                <Button
                  title="Sign In"
                  disabled={!isValid}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
          <Space height={90} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Txt h0 title="Tabs" />
          <Space height={30} />
          <TabDeveloper />
          <Space height={30} />
          <TabCompany />
          <Space height={90} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Txt h0 title="Buttons" />
          <Space height={30} />
          <Button title="Done" onPress={_onPress} />
          <Space height={20} />
          <Button title="Cancel" cancel />
          <Space height={30} />
          <ButtonStatusIssue title={`Open ${34}`} open />
          <Space height={30} />
          <ButtonStatusIssue title={`Closed ${34}`} />
          <Space height={30} />
          <ButtonCircle title="Press me" />
          <Space height={30} />
          <ButtonText title="forgot password?" />
          <Space height={30} />
          <ButtonLink title="link" />
          <Space height={30} />
          <ButtonMarkDecision />
          <Space height={30} />
          <ButtonIconCircle name=":thought_balloon:" />
          <Space height={10} />
          <ButtonIconCircle name=":telephone_receiver:" />
          <Space height={10} />
          <ButtonIconCircle name=":loud_sound:" />
          <Space height={10} />
          <ButtonIconCircle name=":thought_balloon:" />
          <Space height={30} />
          <ButtonComments title="3" />
          <Space height={30} />
          <ButtonRate title="2/433" />
          <Space height={30} />
          <ButtonDeveloperSub
            title={name.findName()}
            uri={image.avatar()}
            rate={String(random.number())}
          />
          <Space height={30} />
          <Star star={bool} onPress={() => setBool(!bool)} />
          <Space height={90} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Txt h0 title="Avatars" />
          <Space height={30} />
          <Avatar uri={image.avatar()} size="xLarge" />
          <Space height={20} />
          <Avatar uri={image.avatar()} size="large" />
          <Space height={20} />
          <Avatar uri={image.avatar()} size="medium" />
          <Space height={20} />
          <Avatar uri={image.avatar()} size="small" />
          <Space height={90} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Txt h0 title="H0" />
          <Txt h1 title="H1" />
          <Txt h2 title="H2" />
          <Txt h3 title="H3" />
          <Txt h4 title="H4" />
          <Txt h5 title="H5" />
          <Txt h6 title="H6" />
          <Txt h7 title="H7" />
          <Txt h8 title="H8" />
          <Txt body title="body" />
        </View>
        <Space height={300} />
      </ScrollView>
    </>
  )
}

export default UIKit
