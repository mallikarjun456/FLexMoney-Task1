import React from 'react';
import { formikcConsumer, useFormik } from 'formik';

export function Newform2() {
   

    const formik = useFormik(
        {
            initialValues: {
                textArea: '',
                personalapperiance: 'Disorganized',
                emotionalstate: '😐 Worried',
                levelofdestress: '1'
            },
            validate: (values) => {
                let errors = {}
                if (values.textArea < 18) {
                    errors.textArea = "Age Must be 18 to 65"
                }else if (values.textArea > 65) {
                    errors.textArea = "Age Must be 18 to 65"
                }

                return errors;
            },
            onSubmit: (data) => {
                console.log(data);
            }
        }
    )

    //console.log(formik.values);

    return (
        <div class="container border pt-4 pb-4 border-secondary mt-4 col-lg-10 col-12 rounded">

            <div class="w-50 m-auto text-start">
                <div class="col-lg-10 m-auto">
                    <lebel> Name </lebel><br />
                    <input type="text" class="mt-2 form-control w-100" />
                </div>
            </div><br/>

            <div class="col-lg-10 m-auto mt-4 mb-4">
                <table class="m-auto w-50 text-start">
                    <tr>
                        <td><lebel>Time Slot: </lebel></td>
                        <td>
                            <select class="btn border-bottom col-lg-10 col-12 m-0 p-0" onChange={formik.handleChange} value={formik.values.levelofdestress} name="levelofdestress">
                                <option>6-7</option>
                                <option>7-8</option>
                                <option>8-9</option>
                                <option>5-6</option>

                            </select>
                        </td>
                    </tr>

                </table>
            </div><br/>

            <div class="w-50 m-auto text-start">
                <div class="col-lg-10 m-auto">
                    <lebel> Age Limit </lebel><br />
                    <textarea onChange={formik.handleChange} name="textArea" value={formik.values.textArea} class="mt-2 form-control w-100" placeholder="Enter age..." type="text" />
                    {formik.errors.textArea ? <div class="text-danger"><b>{formik.errors.textArea}</b></div> : null}

                </div>
            </div><br/>

            <div class="w-50 m-auto mt-4">
                <div class="col-lg-10 m-auto text-start">
                    <button type="button" class="btn btn-success">Pay 500/-</button>
                </div>
            </div>

        </div>
    );

}