import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { addCart } from "../../redux/data/action";
import { Button } from "@material-ui/core";
import { ShoppingCart as Cart, FlashOn as Flash } from "@material-ui/icons";
import {
  Box,
  Grid,
  Typography,
  makeStyles,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { LocalOffer as Badge } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  leftContainer: {
    minWidth: "40%",
    // textAlign: 'center',
    padding: "40px 0 0 80px",
    [theme.breakpoints.down("md")]: {
      padding: "20px 40px",
    },
  },
  productImage: {
    padding: "15px 20px",
    border: "1px solid #f0f0f0",
    width: "95%",
    marginTop: 30
  },
  button: {
    width: "46%",
    borderRadius: 2,
    height: 50,
  },
  addToCart: {
    background: "#ff9f00",
    color: "#FFF",
  },
  buyNow: {
    background: "#fb641b",
    color: "#FFF",
  },
  component: {
    marginTop: 55,
    background: "#F2F2F2",
  },
  container: {
    background: "#FFFFFF",
    // margin: '0 80px',
    display: "flex",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  rightContainer: {
    marginTop: 80,
    "& > *": {
      marginTop: 10,
    },
  },
  price: {
    fontSize: 28,
  },
  smallText: {
    fontSize: 14,
  },
  greyTextColor: {
    color: "#878787",
  },

  badge: {
    marginRight: 10,
    color: "#00CC00",
    fontSize: 15,
  },
  wrapper: {
    display: "flex",
  },

  smallTextDetail: {
    fontSize: 14,
    verticalAlign: "baseline",
    "& > *": {
      fontSize: 14,
      marginTop: 10,
    },
  },
}));

const theme = createTheme();

export default function Productdetail() {
  var navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const idx = params.id;
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  console.log(idx);

  const classes = useStyle();
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  const data = useSelector((state) => state.data.data);
  console.log("productlist", data);

  var po = data.filter((x) => {
    if (+x.id === +idx) {
      return x;
    }
  });
  console.log("po", po);
  
  const handleCart = (idx) => {
    data.forEach((e) => {
      if (e.id == idx) {
        dispatch(addCart(e));
      }
    });
  };

  // const buyNow = async () => {
  //   loadRazorpay(600);
  // };

  // const addItemToCart = () => {
  //    dispatch(addToCart(id, quantity));
  //    history.push('/cart');
  // };

  var items = data.find((e) => {
    if (data.id == idx) {
      return e;
    }
  });
  console.log("par",items);
  return (
    <div>
      {po.map((e) => {
        return (
          <Box>
            <Grid container className={classes.container}>
              <Grid item lg={4} md={4} sm={8} xs={12}>
                <Box className={classes.leftContainer}>
                  <img
                    src={e.images.image1}
                    className={classes.productImage}
                    alt=""
                  />
                  <br />
                  <Button
                    onClick={() => handleCart(idx)}
                    className={(classes.button, classes.addToCart)}
                    style={{ marginRight: 10 }}
                    variant="contained"
                  >
                    <Cart />
                    Add to Cart
                  </Button>
                  <Button
                    // onClick={() => buyNow()}
                    className={(classes.button, classes.buyNow)}
                    variant="contained"
                  >
                    <Flash /> Buy Now
                  </Button>
                </Box>
              </Grid>
              <Grid
                item
                lg={8}
                md={8}
                sm={8}
                xs={12}
                className={classes.rightContainer}
              >
                <Typography>{e.title}</Typography>
                <Typography
                  className={(classes.greyTextColor, classes.smallText)}
                  style={{ marginTop: 5 }}
                >
                  8 Ratings & 1 Reviews
                  <span>
                    <img
                      src={fassured}
                      style={{ width: 77, marginLeft: 20 }}
                      alt=""
                    />
                  </span>
                </Typography>
                <Typography>
                  <span className={classes.price}>₹{e.price}</span>
                  &nbsp;&nbsp;&nbsp;
                  <span className={classes.greyTextColor}>
                    <strike>₹{e.off_price}</strike>
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  <span style={{ color: "#388E3C" }}>{e.discount}% off</span>
                </Typography>
                <Typography>Available offers</Typography>
                <Box className={classes.smallText}>
                  <Typography>
                    <Badge className={classes.badge} />
                    Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank
                    Credit Card
                  </Typography>
                  <Typography>
                    <Badge className={classes.badge} />
                    Bank Offer 10% Off on Bank of Baroda Mastercard debit card
                    first time transaction, Terms and Condition apply
                  </Typography>
                  <Typography>
                    <Badge className={classes.badge} />
                    Purchase this Furniture or Appliance and Get Extra ₹500 Off
                    on Select ACs
                  </Typography>
                  <Typography>
                    <Badge className={classes.badge} />
                    Partner OfferExtra 10% off upto ₹500 on next furniture
                    purchase
                  </Typography>
                </Box>

                <Table>
                  <TableBody>
                    <TableRow className={classes.smallTextDetail}>
                      <TableCell className={classes.greyTextColor}>
                        Delivery
                      </TableCell>
                      <TableCell style={{ fontWeight: 600 }}>
                        Delivery by {date.toDateString()} | ₹40
                      </TableCell>
                    </TableRow>
                    <TableRow className={classes.smallTextDetail}>
                      <TableCell className={classes.greyTextColor}>
                        Warranty
                      </TableCell>
                      <TableCell>No Warranty</TableCell>
                    </TableRow>
                    <TableRow className={classes.smallTextDetail}>
                      <TableCell className={classes.greyTextColor}>
                        Seller
                      </TableCell>
                      <TableCell className={classes.smallTextDetail}>
                        <span style={{ color: "#2874f0" }}>SuperComNet</span>
                        <Typography>GST invoice available</Typography>
                        <Typography>
                          View more sellers starting from ₹329
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>
                        <img src={adURL} style={{ width: 390 }} alt="" />
                      </TableCell>
                    </TableRow>
                    <TableRow className={classes.smallTextDetail}>
                      <TableCell className={classes.greyTextColor}>
                        Description
                      </TableCell>
                      <TableCell>{e.desc}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
          </Box>
        );
      })}
    </div>
  );
}
