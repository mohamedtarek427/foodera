import React from 'react'
import Header from './Header'
import './home.css'
import prideimg from './../../asstets/pride.png'
import ingredients from './../../asstets/ingredients.png'
import myimage from './../../asstets/999.jpg'

import Data from '../../data'
import { Carousel } from 'react-bootstrap'


export default function Home() {
  const blogitem = Data.map((item)=>{
    return(
      <div className='col-md-4'>
      <div className='box'>
      <img src={item.img} />
      <h5>{item.title}</h5>
      <span>{item.time}</span>
      <h6>{item.price}</h6>
      </div>
      <button> <a href="#">Order Now</a></button>
      </div>
    )
  })
  return (
    <fragment>
    <Header />
      <section className='numbers'>
        <div className='container'>
          <div>
            <div className='row'>
              <div className='col-md-3'>
                <h2>1287+</h2>
                <h6>saving</h6>
              </div>
              <div className='col-md-3'>
                <h2>5786+</h2>
                <h6>photos</h6>
              </div>
              <div className='col-md-3'>
                <h2>1440+</h2>
                <h6>rockets</h6>
              </div>
              <div className='col-md-3'>
                <h2>7110+</h2>
                <h6>globes</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pride'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
            <img src={prideimg} title='prideimg'></img>
                <h2> we pride ourselves on making real food from the best ingredients</h2>
                <p>
                    Esse aliqua ad dolor eu do magna non magna qui. Enim labore commodo anim elit id do esse est eu elit sit. Sunt minim exercitation reprehenderit laboris nulla ea. Magna laborum id occaecat mollit Lorem ut irure commodo sint culpa eiusmod sunt occaecat incididunt. Magna pariatur sit pariatur cupidatat. Aute aliquip ea ipsum laborum excepteur. Labore pariatur sunt ullamco consectetur veniam.
                </p>
                <button> <a href='#'>learn more</a> </button>
          </div>
        </div>
        </div>
      </section>
            <section className="ingredients">
              <div className="container">
              <div className="row">
              <div className="col-md-6">
                      <h2>we make everything by hand with the best possible ingredients</h2>
                    <p>Qui minim id et culpa ullamco culpa duis laboris officia sint veniam in anim. Adipisicing sunt aute commodo officia non amet laboris voluptate aute irure laboris elit. Occaecat tempor cillum aute aliquip minim dolor. Duis reprehenderit eu ad duis officia in culpa veniam ad ad enim dolor commodo reprehenderit. Consectetur cillum ea consequat qui ad occaecat adipisicing esse eiusmod culpa anim adipisicing id. Exercitation elit ad magna culpa adipisicing nostrud enim qui.</p>
                      <ul>
                        <li>id et culpa ullamco culpa duis </li>
                        <li>id et culpa ullamco culpa duis </li>
                        <li>id et culpa ullamco culpa duis </li>
                      </ul>
                        <button> <a href='#'>learn more</a> </button>
                        </div>
              
                  </div>
                    <div className='col-md-6'>
                      <img src={ingredients} alt='ingredients'></img>
                    </div>
                </div>
            </section>
              <section className='paralex'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-12 col-lg-12'>
                      <h2>When a man's stomach is full it makes no <br/>
                      difference whether he is rich or poor.</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Etiam et purus a odio
                      finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p> 
                      <a href="#">watch our story</a>
                    </div>
                  </div>
                </div>
              </section>
                <section className='blogs'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-12 col-lg-12'>
                        <h2>explore our foods</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet <br/> leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia  and  <br/> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                      </div>
                    </div>
                      <div className='row'>
                          {blogitem}
                      </div>
                  </div>
                </section>
                  <section className='sliderx'>
                  <div className='container'>
                  <div className='row'>
                  <div className='col-md-12 col-lg-12'>
                  <h2>Testimonials</h2>
                  <div className='row'>
                    </div>
                    </div>
                      <div className='col-md-12 col-lg-12'>
                      <Carousel>
                      <Carousel.Item>
                        <img src={myimage} />
                        <Carousel.Caption>
                        <h3>mohamed tarek</h3>
                        
                          <p>ui-ux desinger</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img src={myimage} />
                    
                        <Carousel.Caption>
                          <h3>mohamed tarek</h3>
                          <p>front end developer</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                    </div>
                    </div>
                  </div>
                  </section>
    </fragment>
  )
}