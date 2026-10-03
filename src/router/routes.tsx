import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from '../components/Landing'
import NumFlash from '../components/NumFlash'
import Privacy from '../components/PrivacyPolicy'
import * as PablikObject from '../pablikObjek'

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PablikObject.alamatDasarRouter} element={<Landing />} />
      <Route path={PablikObject.alamatDasarRouter + PablikObject.alamatNumFlash} element={<NumFlash />} />
      <Route path={PablikObject.alamatDasarRouter + PablikObject.alamatNumFlash + '/' + PablikObject.alamatPrivacy} element={<Privacy />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
