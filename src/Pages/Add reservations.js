const validationSchema = Yup.object().shape({

    Destination: Yup.string()
      .min(2, '*destination must have at least 5 characters')
      .max(25, '*destination can't be longer than 25 characters')
      .required('*destination island is required'),
  
    Sign_in: Yup.date().required('*Sign In date is required'),
    Sign_out: Yup.date().required('*Sign Out date is required'),
  });
  
  const postNewReservation = () => {
    const [show, setShow] = useState(false);
    // const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <div className="form-container1">
        <div className="fullScreen">
          <div className="p-2 vis">
            <FontAwesomeIcon icon={faBars} onClick={handleShow} className="text-white" />
          </div>
          <div className="txtWrapper">
            <h1 className="upperCase txtWhite fs-1">Book a reservation</h1>
            <p className="txtWhite">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              erat massa, accumsan a porta quis, faucibus et mi. Curabitur
              cursus nulla eu magna posuere, sit amet fringilla orci elementum.
            </p>
  