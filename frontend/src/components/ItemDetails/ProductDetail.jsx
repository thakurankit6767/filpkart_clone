import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
//import * as React from 'react';

import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./ProductView.css";
import { Button } from "@material-ui/core";
import { addCart } from "../../redux/data/action";

import {
  Box,
  Typography,
  makeStyles,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { LocalOffer as Badge } from "@material-ui/icons";

const useStyle = makeStyles({
  smallText: {
    fontSize: 14,
    verticalAlign: "baseline",
    "& > *": {
      fontSize: 14,
      marginTop: 10,
    },
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
});

const theme = createTheme();

export default function Productdetail() {
  var navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const idx = params.id;
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

  // var items = data.find((e) => {
  //   if (data.id == idx) {
  //     return e;
  //   }
  // });
  //console.log("par",items);
  return (
    <div>
      {po.map((e) => {
        return (
          <div>
            <div id="main">
              <div id="clicked_data">
                <img src={e.images.image1} />
              </div>
              <div id="right_box">
                <h2>{e.brand}</h2>
                <h3 style={{ color: "#908680" }}>{e.title}</h3>
                <h3>
                  Rs. {e.price} <span id="do">{e.off_price}</span>
                  {e.discount} % off{" "}
                </h3>

                <h5 style={{ color: "#1eb0a0" }}></h5>
                <h5>SELECT SIZE</h5>
                <p style={{ fontWeight: "600", fontSize: "20px" }}>
                  {" "}
                  <span
                    style={{ border: "1px solid", padding: "1% 3%" }}
                    className="ml-3"
                  >
                    M
                  </span>{" "}
                  <span
                    style={{ border: "1px solid", padding: "1% 4%" }}
                    className="ml-2"
                  >
                    L
                  </span>{" "}
                  <span
                    style={{ border: "1px solid", padding: "1% 3%" }}
                    className="ml-2"
                  >
                    XL
                  </span>
                </p>
                <div id="button">
                  <Button id="btn1" onClick={handleCart(idx)}>
                    add to cart
                  </Button>
                  <Button id="btn2">add to wishlist</Button>
                </div>

                
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
                    <TableRow className={classes.smallText}>
                      <TableCell className={classes.greyTextColor}>
                        Delivery
                      </TableCell>
                      <TableCell style={{ fontWeight: 600 }}>
                        Delivery by {date.toDateString()} | ₹40
                      </TableCell>
                    </TableRow>
                    <TableRow className={classes.smallText}>
                      <TableCell className={classes.greyTextColor}>
                        Warranty
                      </TableCell>
                      <TableCell>No Warranty</TableCell>
                    </TableRow>
                    <TableRow className={classes.smallText}>
                      <TableCell className={classes.greyTextColor}>
                        Seller
                      </TableCell>
                      <TableCell className={classes.smallText}>
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
                    <TableRow className={classes.smallText}>
                      <TableCell className={classes.greyTextColor}>
                        Description
                      </TableCell>
                      {/* <TableCell>{product.description}</TableCell> */}
                    </TableRow>
                  </TableBody>
                </Table>

                
                {/* <div id="content">
                  <input type="text" id="pin" placeholder="Enter a PIN code" />
                  <h5 style={{ marginTop: "1%" }}>
                    Please enter PIN code to check delivery time & Pay on
                    Delivery Availability
                  </h5>

                  <ul>
                    <li>100% Original Products</li>
                    <li>Pay on delivery might be available</li>
                    <li>Easy 15 days returns and exchanges</li>
                    <li>Try & Buy might be available</li>
                    <li>Regular fit</li>

                    <li>Polo with classic collar</li>
                    <li>Hand wash</li>
                  </ul>
                </div>
                <h3>BEST OFFERS</h3>
                <p>This product is already at its best price</p>
                <ul>
                  <li>EMI option available</li>
                </ul> */}

                <p style={{ color: "red", marginTop: "0px" }}>View Plan</p>
              </div>
            </div>
            <div className="imagediv">
              {/* <div className="imagedivimg">
                <img
                  style={{ width: "100%", height: "400px" }}
                  src={e.images.image2}
                />
              </div> */}
              {/* <div className="imagedivimg">
                <img
                  style={{ width: "100%", height: "400px" }}
                  src={e.images.image3}
                />
              </div> */}
              {/* <div className="imagedivimg">
                <img
                  style={{ width: "100%", height: "400px" }}
                  src={e.images.image4}
                />
              </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
