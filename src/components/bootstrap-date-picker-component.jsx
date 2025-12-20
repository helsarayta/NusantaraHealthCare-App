import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BootstrapDatePicker = () => {
    const [startDate, setStartDate] = useState(null);

    return (
        <div className="mb-3 position-relative w-100">
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="form-control pe-5"
                wrapperClassName="w-100"
                placeholderText="dd/mm/yyyy"
            />
            <i className="bi bi-calendar-event datepicker-icon"></i>
        </div>
    );
};

export default BootstrapDatePicker;
