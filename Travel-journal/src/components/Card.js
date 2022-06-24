import React from "react"

export default function Card(props) {
    console.log(props)
return (
    <section class="py-5">
    <div class="container py-4">
        <div class="row align-items-stretch gx-lg-0">
        <div class="col-lg-6 order-2 order-lg-1 bg-full-left">
            <div class="h-100 bg-light d-flex align-items-center">
            <div class="py-5 px-4">
                <p class="text-primary font-weight-bold small text-uppercase mb-2">Travel guide</p>
                <h3 class="h4"> <a class="text-reset" href={props.googleMapsUrl}>{props.title}</a></h3>
                <div class="text-muted">
                <p>{props.description}.</p>
                </div>
                <ul class="list-inline small text-uppercase mb-0">
                <li class="list-inline-item align-middle me-0">{props.location}</li>
                <li class="list-inline-item text-gray align-middle ">|</li>
                <li class="list-inline-item text-gray align-middle">{props.startDate} </li>
                <li class="list-inline-item text-gray align-middle ">-</li>
                <li class="list-inline-item text-gray align-middle">{props.endDate} </li>
                </ul>
            </div>
            </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2"><a class="d-block h-100 bg-center bg-cover card-img" href={props.googleMapsUrl} style={{background: `url(${props.imageUrl}) center 75%`}}></a></div>
        </div>
    </div>
    </section>
)
}