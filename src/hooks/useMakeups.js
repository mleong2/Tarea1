import {useEffect, useState} from "react";
import ilia from "../img/ilia2.jpg";
import basef from "../img/foundation.png";
import imag from "../img/images.jpg";
import el from "../img/el.jpg";
import lips from "../img/lips.png";
import eye from "../img/eyeshadow.jpg";
import labial from "../img/labial.jpg";
import redlip from "../img/redlip.jpg";
import gucci from "../img/gucci.jpg";
import carolina from "../img/carolina.jpg";

export const useMakeups = () => {

    const [makeups, setMakeups] = useState([]);
    /**
     * Se hace uso de useEffect para definir un efecto de montaje que traerá la información de ingredientes
     * del back-end en el primer renderizado.
     */
    useEffect(() => {
        //fetch(process.env.REACT_APP_GW_URL).then((res) => res.json()).then((res) => setRestaurants(res));

        setTimeout(() => {
            setMakeups([
                {id: "1", name: "ILIA skin tint", category: "foundation", price: 18.50, image:ilia},
                {id: "2", name: "Urban makeup forever", category: "foundation", price: 20.60, image:basef},
                {id: "3", name: "Cream foundation with spf", category: "foundation", price: 12.20, image:imag},
                {id: "4", name: "Estee Lauder foundation", category: "foundation", price: 56.80, image:el},
                {id: "5", name: "Lip inyection pump style", category: "foundation", price: 40.00, image:lips},
                {id: "6", name: "Anastasia Beverly eyeshadow", category: "foundation", price: 40.00, image:eye},
                {id: "7", name: "Red colorcare lipstick", category: "foundation", price: 23.35, image:lips},
                {id: "8", name: "Red lipstick MAC", category: "foundation", price: 12.30, image:redlip},
                {id: "9", name: "Gucci parfaum for women", category: "foundation", price: 122.30, image:gucci},
                {id: "10", name: "212 vip carolina herrera", category: "foundation", price: 110.10, image:carolina},
                /*{id: "2", name: "Nars reflecting foundation", category: "foundation", price: 40.95},
                {id: "3", name: "Too Faced super coverage concealer", category: "concealer", price: 4.25},
                {id: "4", name: "Rare beauty liquid touch", category: "concealer", price: 34.70},
                {id: "5", name: "Milk countour stick", category: "concealer", price: 24.10},
                {id: "6", name: "Glossier solar paint", category: "concealer", price: 32.60},*/

            ]);
        }, 2500);
    }, []);

    return makeups;
}