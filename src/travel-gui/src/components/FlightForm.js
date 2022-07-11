import React from "react";
import { useForm } from "react-hook-form";

export const FlightForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  //console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="row">
        <label class="col-sm-2 col-form-label">Flight Number:</label>
        <div class="col">
          <input type="text" class="form-control"       
            {...register("flightNumber", { required: true})} 
          />
        </div>
        <label class="col-sm-2 col-form-label">Airline:</label>
        <div class="col">
          <input type="text" class="form-control" placeholder="Airline"
            {...register("airlineName", { required: true })} 
          />
        </div>
      </div>
      <div class="row">
        <label class="col-sm-2 col-form-label">Departure Airport:</label>
        <div class="col">
          <input type="text" class="form-control" placeholder="Departure Airport"
            {...register("departureAirportName", { required: true })}
          />
        </div>
        <label class="col-sm-2 col-form-label">Arrival Airport:</label>
        <div class="col">
          <input type="text" class="form-control" placeholder="Arrival Airport"
            {...register("arrivalAirportName", { required: true })}
          />
        </div>
      </div>
      <div class="row">
        <label class="col-sm-2 col-form-label">Start Location:</label>
        <div class="col">
          <input type="text" class="form-control" placeholder="Start Location"
            {...register("startLocation", { required: true })}
          />
        </div>
        <label class="col-sm-2 col-form-label">End Location:</label>
        <div class="col">
          <input type="text" class="form-control" placeholder="End Location"
            {...register("endLocation", { required: true })}
          />
        </div>
      </div>
      <div class="row">
        <label class="col-sm-2 col-form-label">Departure Date:</label>
        <div class="col">
          <input type="text" class="form-control" placeholder="Departure Date"
            {...register("departureTime", { required: true })}
          />
        </div>
        <label class="col-sm-2 col-form-label">Arrival Date:</label>
        <div class="col">
          <input type="text" class="form-control" placeholder="Arrival Date"
            {...register("arrivalTime", { required: true })}
          />
        </div>
      </div>
      <div class="row">
        <label class="col-sm-2 col-form-label">Confirmation Code:</label>
        <div class="col">
          <input type="text" class="form-control" placeholder="Confirmation Code"
            {...register("confirmationCode", { required: true })}
          />
        </div>
        <label class="col-sm-2 col-form-label">Notes:</label>
        <div class="col">
          <input type="text" class="form-control" placeholder="Notes"
            {...register("notes", { required: true })}
          />
        </div>
      </div>
      {errors.exampleRequired && <span>This field is required</span>}
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  );
}