import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//to make notifications to any component
const Notify = (msg, type) => {
    if (type === "warn")
        toast.warn(msg)
    else if (type ==="success")
        toast.success(msg)
    else if (type ==="error")
        toast.error(msg)
};

export default Notify;