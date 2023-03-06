import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, UseCart } from "./ContexReducer"

const Card = (props) => {
    let dispatch = useDispatchCart();
    let data = UseCart()
    let options = props.options;
    const priceRef = useRef();
    let priceOptions = Object.keys(options)
    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")

    const handleAddCart = async () => {
        let food = []
        for (const item of data) {
            if (item.id === props.foodItem._id) {
                food = item;
                break;
            }
        }
        if (food !== []) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: props.foodItem._id, price: FinalPrice, qty: qty })
                return
            }
            else if (food.size !== size) {
                await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: FinalPrice, qty: qty, size: size })
                return
            }
            return
        }
            await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: FinalPrice, qty: qty, size: size })
           
        }//console.log(data)
    

    let FinalPrice = qty * parseInt(options[size]);
    useEffect(() => {
        setSize(priceRef.current.value)
    }, []);
    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src={props.foodItem.img} class="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>

                    <div className='container w-100 '>
                        <select className='m-2 h-100  bg-success' onChange={(e) => setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1}</option>
                                )
                            })}
                        </select>

                        <select className='m-2 h-100  bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)} >
                            {priceOptions.map((data) => {
                                return <option key={data} value={data}>{data}</option>
                            })}
                        </select>

                        <div className='d-inline h-100 fs-5'>
                            ₨{FinalPrice}/-
                        </div>
                    </div>
                    <hr>
                    </hr>
                    <button className={'btn btn-success justify-center ms-2'} onClick={handleAddCart} > add to cart </button>

                </div>
            </div>

        </div>
    )
}

export default Card