import { AppBar, Button, Stack } from '@mui/material'
import { Typography } from '@mui/material'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext, CartContextType } from '../../context/CartContext'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux'

function Navbar() {

  const { i18n, t } = useTranslation()
  let dispatch = useDispatch()


  const { cart } = useContext(CartContext) as CartContextType

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem("lang", lng)
  }

  let currentLang = localStorage.getItem("lang");

  if (currentLang == null) {
    currentLang = "en"
  }

  const logout = () => {
    dispatch({ type: "auth/logout" })
  }


  return <>
    <AppBar position="static">
      <Stack direction="row" justifyContent="space-evenly" sx={{ padding: "1%" }}>
        <Link style={{ color: "white", textDecoration: "none" }} to="/"><Typography variant="h5">{t("Home")}</Typography></Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/products"><Typography variant="h5">{t("Products")}</Typography></Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/orders"><Typography variant="h5">{t("Orders")} (JWT)</Typography></Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/todos"><Typography variant="h5">{t("Todos")}</Typography></Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/cart">
          <Typography variant="h5">{t("Cart")}<span style={{ color: "red" }}>({cart.length})</span></Typography>
        </Link>

        <select onChange={(e) => changeLanguage(e.target.value)} value={currentLang}>
          <option value="en">EN</option>
          <option value="tr">TR</option>
        </select>
        <Button variant="contained" color="error" onClick={() => logout()}>Logout</Button>

      </Stack>
    </AppBar>
  </>
}

export default Navbar