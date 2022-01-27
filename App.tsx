import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function App() {
  return (
    <Container>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
    </Container>
  )
}
