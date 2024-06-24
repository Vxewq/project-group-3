import "./style.scss";
import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Carousel,
} from "@material-tailwind/react";
export default function Shohruh() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <div className="nav">
        <div className="logo">
          <a href="#">
            <img src="/logo.png" alt="" />
          </a>
        </div>
        <ul>
          <li>
            <a href="#">all products</a>
          </li>
          <li>
            <a href="#">Solutions</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
        <div className="icons">
          <a href="#">
            <img src="/icon.png" alt="" />
          </a>
          <a href="#">
            <img src="/Frame.png" alt="" />
          </a>
        </div>
        <React.Fragment>
          <Button className="ok" onClick={openDrawer}>
            menu
          </Button>
          <Drawer open={open} onClose={closeDrawer} className="p-4">
            <ul className="small">
              <li>
                <a href="#">all products</a>
              </li>
              <li>
                <a href="#">Solutions</a>
              </li>
              <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </Drawer>
        </React.Fragment>
      </div>
      <div className="showcase">
        <Carousel className="rounded-xl">
          <div className="side">
            <div className="left">
              <h1>The new phones are here take a look.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.
              </p>
              <Button variant="outlined" className="rounded-full">
                Explore
              </Button>
            </div>
            <div className="rigth">
              <img
                src="https://s3-alpha-sig.figma.com/img/3c1e/4caa/09390e4696bd452c8420dbe4a7164d7b?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M5OFF4mlfgFkZl7yBqGqNxyB30kvlCvy5FqgXw1s-m7m9hQ0Lfh8wPRSwOzQm5PJoRgZUgQS0iq3H6W~BY7UVy96gLLKkKsZR~kzXSiIe98hNw0JA-RUaybBoJsZzCq0-49d0dyXFIxtpjenaYhiHJN5cwIgN1GFVuyfYAsHVgJ2WsVBHH7B-DQO7vBE~~BfTs0rhPytTpYBOpadlpf9CEdw8OHWpmOtyoYXGQRmP6~i9CjH~-RFPgiEwUONB54UxjbwAniuu-rZ7z0QigIYA-kZtiufhGo2mKtMGxhWsB9Lirq9ITNr6BIcFw-oEk7q1Q~5dHjyggJ1TRWY0M4PNQ__"
                alt=""
              />
            </div>
          </div>
          <div className="side">
            <div className="left">
              <h1>The new phones are here take a look.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.
              </p>
              <Button variant="outlined" className="rounded-full">
                Explore
              </Button>
            </div>
            <div className="rigth">
              <img
                src="https://s3-alpha-sig.figma.com/img/3c1e/4caa/09390e4696bd452c8420dbe4a7164d7b?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M5OFF4mlfgFkZl7yBqGqNxyB30kvlCvy5FqgXw1s-m7m9hQ0Lfh8wPRSwOzQm5PJoRgZUgQS0iq3H6W~BY7UVy96gLLKkKsZR~kzXSiIe98hNw0JA-RUaybBoJsZzCq0-49d0dyXFIxtpjenaYhiHJN5cwIgN1GFVuyfYAsHVgJ2WsVBHH7B-DQO7vBE~~BfTs0rhPytTpYBOpadlpf9CEdw8OHWpmOtyoYXGQRmP6~i9CjH~-RFPgiEwUONB54UxjbwAniuu-rZ7z0QigIYA-kZtiufhGo2mKtMGxhWsB9Lirq9ITNr6BIcFw-oEk7q1Q~5dHjyggJ1TRWY0M4PNQ__"
                alt=""
              />
            </div>
          </div>
        </Carousel>
      </div>
      <div className="offers">
        <div className="title">
          <h1>Shop our latest offers and categories</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            in est dui, aliquam, tempor. Faucibus morbi turpis. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="grid">
          <div className="side">
            <div className="img"></div>
            <div className="info">
              <span>Laptops</span>
              <h2>True Laptop Solution</h2>
            </div>
          </div>
          <div className="side">
            <div className="img"></div>
            <div className="info">
              <span>Phones</span>
              <h2>Your day to day life</h2>
            </div>
          </div>
          <div className="side">
            <div className="img"></div>
            <div className="info">
              <span>Tablet</span>
              <h2>Empower your work</h2>
            </div>
          </div>
          <div className="side">
            <div className="img"></div>
            <div className="info">
              <span>Watch</span>
              <h2>Not just stylisht</h2>
            </div>
          </div>
        </div>
        <div className="shop">
          <div className="title">
            <h1>Save on our most selled items.</h1>
            <p>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
          </div>
          <div className="cards">
            <div className="card">
              <img src="/macbook.png" alt="" />
              <div className="txt">
                <h2>MacBook Pro 13</h2>
                <p>
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
                </p>
                <span>$ 1,200.00 USD</span>
              </div>
            </div>
            <div className="card">
              <img src="/macbook.png" alt="" />
              <div className="txt">
                <h2>MacBook Pro 13</h2>
                <p>
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
                </p>
                <span>$ 1,200.00 USD</span>
              </div>
            </div>
            <div className="card">
              <img src="/macbook.png" alt="" />
              <div className="txt">
                <h2>MacBook Pro 13</h2>
                <p>
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
                </p>
                <span>$ 1,200.00 USD</span>
              </div>
            </div>
            <div className="card">
              <img src="/macbook.png" alt="" />
              <div className="txt">
                <h2>MacBook Pro 13</h2>
                <p>
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
                </p>
                <span>$ 1,200.00 USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="best">
        <div className="title">
          <h1>See the best around here</h1>
          <p>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
          
        </div>
        <div className="carts">
            <div className="cart">
              <div className="txt">
                <p>Smart light bulb pack</p>
                <h2>Latest and gratest</h2>
                <Button variant="outlined" className="rounded-full">Explore</Button>
              </div>
              <img src="/watch.png" alt="" />
            </div>
            <div className="cart">
              <div className="txt">
                <p>Smart light bulb pack</p>
                <h2>Latest and gratest</h2>
                <Button variant="outlined" className="rounded-full">Explore</Button>
              </div>
              <img src="/watch.png" alt="" />
            </div>
            <div className="cart">
              <div className="txt">
                <p>Smart light bulb pack</p>
                <h2>Latest and gratest</h2>
                <Button variant="outlined" className="rounded-full">Explore</Button>
              </div>
              <img src="/watch.png" alt="" />
            </div>
          </div>
      </div>
    </>
  );
}
