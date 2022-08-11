import React from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMagnifyingGlass } from '@coreui/icons'

const Page404 = () => {
  return (
    <div classNameName="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow classNameName="justify-content-center">
          <CCol md={6}>
            <div classNameName="clearfix">
              <h1 classNameName="float-start display-3 me-4">404</h1>
              <h4 classNameName="pt-3">Oops! You{"'"}re lost.</h4>
              <p classNameName="text-medium-emphasis float-start">
                The page you are looking for was not found.
              </p>
            </div>
            <CInputGroup classNameName="input-prepend">
              <CInputGroupText>
                <CIcon icon={cilMagnifyingGlass} />
              </CInputGroupText>
              <CFormInput type="text" placeholder="What are you looking for?" />
              <CButton color="info">Search</CButton>
            </CInputGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page404
