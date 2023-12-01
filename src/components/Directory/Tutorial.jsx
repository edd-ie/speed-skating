import React from "react";
import Header from "../Header";
import "../Styles/Tutorial.css"
import pdf from "../../assets/Board Pad Installation.pdf"
import map from '../../assets/skatePics/Screenshot 2023-11-21 114352.jpg'
import crank from '../../assets/skatePics/crank.jpg'
import wood from '../../assets/skatePics/woodPlace.jpg'
import cartShow from '../../assets/skatePics/CartPlacement.jpg'
import cartWall from '../../assets/skatePics/cartWall.jpg'
import unpack1 from '../../assets/skatePics/unpack1.jpg'
import sidesMat from '../../assets/skatePics/sidesMat.jpg'
import smallMatt from '../../assets/skatePics/smallMatt.jpg'
import backPad from '../../assets/skatePics/backPad.jpg'
import matSizes from '../../assets/skatePics/matSizes.jpg'
import zamboniDoor from '../../assets/skatePics/zamboniDoor.jpg'
import removingCart from '../../assets/skatePics/removingCart.jpg'
import closedDoors from '../../assets/skatePics/closedDoors.jpg'



export default function Tutorial() {
    const handleDownload = () => {
        fetch("../../assets/Board Pad Installation.pdf").then((response) => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Board Pad Installation.pdf";
                alink.click();
            });
        });
    };
    
    return(
        <div className="Tutorial">
            <div className="contentTutor">
                <div className="navigation">
                    <a href="#pLayout">Layout</a>
                    <a href="#pSetup">Setup</a>
                    <a href="#pCarts">Carts</a>
                    <a href="#pUnpack">Unpack</a>
                    <a href="#pPlacement">Placement</a>
                    <a href="#pFinishing">Finishing</a>
                </div>
                
                <div className="sect" id="pLayout">
                    <h1 className="sectHead">Layout</h1>
                    <a
                        href={pdf}
                        download="Board Pad Installation.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="download">
                        </div>
                    </a>
                    <img src={map} alt="Area layout" className="map" />
                </div>

                <div className="sect" id="pSetup">
                    <h1 className="sectHead">Setup</h1>
                    <ul className="txtCmd">
                        <li>Open the door to the ice surface.</li>
                        <li>There is a crank – turn right until the mechanism releases.</li>
                        <li>Roll the doors open all the way.</li>
                    </ul>
                    <img src={crank} alt="crank" className="images"/>

                    <ul className="txtCmd">
                        <li>From the Zamboni room, place the wooden ramp on the cement floor</li>
                        <li>Ensure it's in front of the ice surface entry way.</li>
                    </ul>
                    <img src={wood} alt="wood" className="images"/>
                </div>

                <div className="sect" id="pCarts">
                    <h1 className="sectHead">Carts</h1>
                    <ul className="txtCmd">
                        <li>4 carts are stored tightly, against the outside wall of the Zamboni room</li>
                        <li>2 carts are stored in Storage Room B.</li>
                        <li>3 carts are stored in Room A</li>
                    </ul>
                    <img src={cartShow} alt="crank" className="images"/>

                    <ul className="txtCmd">
                        <li>Storage A & B are locked during storage</li>
                        <li>Keys are inside the lock boxes, the 2 share the same code</li>
                        <li>Return keys after unlocking</li>
                        <li>Start wheeling carts along the wall 1st</li>
                        <li>Return keys after unlocking</li>
                    </ul>
                    <img src={cartWall} alt="wood" className="images"/>
                </div>

                <div className="sect" id="pUnpack">
                    <h1 className="sectHead">Unpacking marts (SAFETY FIRST)</h1>
                    <ul className="txtCmd">
                        <li>WORK TOGETHER! Do not move or lift a pad if it is to heavy for you</li>
                        <li>The pads labeled “BACK PAD ONLY” can be very heavy.</li>
                        <li>Do not strain yourself & bend your knees when lifting</li>
                    </ul>
                    <img src={unpack1} alt="crank" className="images"/>

                    <ul className="txtCmd">
                        <li>line-up the board pads, starts on the right hand side of the rink for both A & B </li>
                    </ul>
                    <img src={sidesMat} alt="wood" className="images"/>
                </div>

                <div className="sect" id="pPlacement">
                    <h1 className="sectHead">Placing marts (check order!)</h1>
                    <ul className="txtCmd">
                        <li>On the right hand side, starting at the blue line, place the ½ size pads (AKA: AdMats)</li>
                        <li>Place them in a line along the perimeter of the rink, butting the ends together, as far as they will go.</li>
                        <li>When there are no more ½ size AdMats– continue lining the with the “Back Pad Only” pads.</li>
                        <li>The last back pad will extend just past the entry doors to the ice surface.</li>
                    </ul>
                    <img src={smallMatt} alt="crank" className="images"/>

                    <ul className="txtCmd">
                        <li>Starting in the middle of the first ½ size AdMats.</li>
                        <li>Place “BACK PAD ONLY” pads in front of the 1/2 size AdMats.</li>
                        <li>Stop placement when they reach half-way in the middle of the back board pad.</li>
                    </ul>
                    <img src={backPad} alt="wood" className="images"/>
                    
                    <ul className="txtCmd">
                        <li>For the outer layer of pads.</li>
                        <li>Place newer pads (usually in the storage room & lighter blue)</li>
                        <li>Start the placement of these pads at the red line..</li>
                    </ul>
                    <img src={matSizes} alt="wood" className="images"/>
                </div>
                
                <div className="sect" id="pFinishing">
                    <h1 className="sectHead">Finishing touches</h1>
                    <ul className="txtCmd">
                        <li>Move the carts off the ice.</li>
                        <li> Close the doors securely and the people left on the ice will finish filling the empty space.</li>
                        <li>The last person leaving the ice should make sure the side door is closed before the Zamboni enters.</li>
                        <li>The last back pad will extend just past the entry doors to the ice surface.</li>
                    </ul>
                    <img src={zamboniDoor} alt="crank" className="images"/>

                    <ul className="txtCmd">
                        <li>Starting in the middle of the first ½ size AdMats.</li>
                        <li>Place “BACK PAD ONLY” pads in front of the 1/2 size AdMats.</li>
                        <li>Stop placement when they reach half-way in the middle of the back board pad.</li>
                    </ul>
                    <img src={backPad} alt="wood" className="images"/>
                    
                    <ul className="txtCmd">
                        <li>Place the empty carts, neatly and safely along the walls.</li>
                        <li>DO NOT block emergency exits, fire extinguisher or corridors!</li>
                        <li>Start the placement of these pads at the red line..</li>
                    </ul>
                    <img src={removingCart} alt="wood" className="images"/>

                    <ul className="txtCmd">
                        <li>After the Zamboni has left the ice and the ice has been cleaned off </li>
                        <li>Make sure that Side B’s doors, to the ice surface, are closed securely..</li>
                    </ul>
                    <img src={closedDoors} alt="wood" className="images"/>
                </div>

            </div>

            <Header/>
        </div>
    )
}