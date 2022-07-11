import React from "react";
import { useForm } from "react-hook-form";

export const CityForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form>
            <div>
                <label>City:</label>
                <input type="text" class="form-control"       
                    {...register("cityName", { required: true })}
                />
            </div>
            <div>
                <label>Country:</label>
                <input type="text" class="form-control"
                    {...register("countryName", { required: true })}
                />
            </div>
            <div>
                <label>Start Date:</label>
                <input type="text" class="form-control"
                    {...register("startDate", { required: true })}
                />
            </div>
            <div>
                <label>End Date:</label>
                <input type="text" class="form-control"
                    {...register("endDate", { required: true })}
                />
            </div>
            {errors.exampleRequired && <span>This field is required</span>}
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
}