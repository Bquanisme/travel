import React, { useEffect, useState } from "react";
import getAPI from "./CallAPIForAll"
import gif from './empty.gif';
import CardTravel from "./Cardtravel";
import RangeSlider from "./Slider";
import Category from "./Category";
import Cuisine from "./Cuisine";
import StarRating from "./StarRating";


const ListItem = () => {
    const [all, setAll] = useState([])
    const [search, setSearch] = useState()
    const [placedishBtn, setPlaceDishBtn] = useState([])
    const [cuisineCheck, setCuisineCheck] = useState([])
    const [starCheck, setStarCheck] = useState([])
    const [loading, setLoading] = useState(true)
    const URL = 'https://62a00597a9866630f80561eb.mockapi.io/v1/tour'

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAPI(URL)
            setSearch(data)
            setPlaceDishBtn(data)
            setCuisineCheck(data)
            setStarCheck(data)
            await loadingData(data)
            setLoading(false)
        }
        fetchData()
    }, [])

    const ValueSearch = (e) => {
        const keyword = e.target.value;
        setSearch(keyword); 
        if (keyword === "") {
            loadingData(placedishBtn); 
        } else {
            const filteredSearch = placedishBtn.filter(item =>
                item.title.toLowerCase().includes(keyword)
            );
            loadingData(filteredSearch);
        }
    };



    //////// Neu place va dishes la url:

    // const loadingPlace = async () => {
    //     setLoading(true);
    //     const data = await getAPI(place);
    //     const filtered = data.category.filter(dt => dt.category === "place");
    //     await loadingData({ category: filtered });
    //     setLoading(false);
    // };

    // const loadingDishes = async () => {
    //     setLoading(true);
    //     const data = await getAPI(dish);
    //     const filtered = data.category.filter(dt => dt.category === "dish");
    //     await loadingData({ category: filtered });
    //     setLoading(false);
    // };


    //////// Neu place va dishes la data:
    const FilterPlaceAndDishes = async (selectedCategory) => {
        // // Cach lam tach tung phan
        // let filtered = [];
        // if (selectedCategory === "place") {
        //     filtered = placedishBtn.filter(dt => dt.category === "place");
        // } else if (selectedCategory === "dish") {
        //     filtered = placedishBtn.filter(dt => dt.category === "dish");
        // } else {
        //     filtered = placedishBtn; 
        // }

        //cach lam gop (voi selectedCategory la props loc toan bo thong tin cua API)
        const filtered = placedishBtn.filter(dt => dt.category === selectedCategory)
        console.log(selectedCategory)
        await loadingData(filtered); 
        setLoading(false);
    };

    const checkCuisine = async (label) => {
        setLoading(true);
        const filtered = cuisineCheck.filter(item => item.cuisine === label);
        await loadingData(filtered);
        setLoading(false);
    };

    const handleCuisineChange = (value, checked) => {
        if (checked) {
            checkCuisine(value);
        } 
        else {
            loadingData(placedishBtn);
        }
    };

    const StarRate = async (star) => {
        setLoading(true)
        const filterStar = starCheck.filter(fil => fil.rating == star)
        console.log(filterStar)
        await loadingData(filterStar)
        setLoading(false)
    }

    const loadingData = async(alldata) => {
        setAll(alldata)
    }

    return (
        <div>
            <>
            <div className="search">
                <p>🔎</p>
                <input 
                    type="text" name="name" placeholder="Woodland Hills" className="search-title" 
                    onChange={ValueSearch}
                />
            </div>
            </><br />
            <div className="box">
                <div className="box-search-and-load-left">
                    <div>
                        <h3>Category</h3>
                        <div className="Category">
                            <Category onFilter={FilterPlaceAndDishes}/>
                        </div>
                    </div>
                    <div>
                        <h3>Cuisine</h3>
                        <div className="cuisine">
                            <Cuisine onChange={handleCuisineChange}/>
                        </div>
                    </div>
                    <div>
                        <h3>Price Range</h3>
                        <br />
                        <RangeSlider />
                    </div>
                    <div>
                        <h3>Star Rating</h3>
                        <div className="star-rating">
                        <StarRating onStar={StarRate}/>
                        </div>
                    </div>
                </div>
                {loading ? (<img src={gif}></img>) : (

                <div className="box-search-and-load-right">
                    <div className="allboxes">
                        {all.map((travel, id) => (
                            <CardTravel key={id} travel={travel} />
                        ))}
                    </div>    
                </div>
                )}
            </div>
        </div>
    )
}
export default ListItem