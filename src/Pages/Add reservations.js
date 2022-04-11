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
  
            <Formik
            initialValues={{
              destination: '',
              start_date: '',
              end_date: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              // dispatch(createReservation(values));
              resetForm();
              setSubmitting(false);
              navigate('/reservations');
            }}
          >

            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit} className="mx-auto row row-cols-2 row-cols-lg-4 mt-3 d-flex justify-content-center align-items-center">
                <Form.Group controlId="formdestination">
                  <Form.Label>Destination</Form.Label>
                  <Form.Select
                    aria-label="Select destination"
                    name="destination"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.destination}
                    className="{touched.destination && errors.destination ? 'error' : null} form-radius"
                  >
                    <option>Select destination island</option>
                    <option value="Seychelles">Lusaka</option>
                    <option value="Maurituis">Abuja</option>
                    <option value="Peurto Rico">Lagos</option>
                    <option value="Barbados">Morocco</option>
                  </Form.Select>
                  {touched.destination && errors.destination ? (
                    <div className="error-message-white">{errors.city}</div>
                  ) : null}
                </Form.Group>

                <Form.Group controlId="FormSignup">
                  <Form.Label>Sign up</Form.Label>
                  <Form.Control
                    type="date"
                    name="Sign_up"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.rate}
                    className="{touched.sign_up && errors.sign_up ? 'error' : null} form-radius"
                  />
                  {touched.check_in && errors.check_in ? (
                    <div className="error-message-white">{errors.check_in}</div>
                  ) : null}
                </Form.Group>

                <Form.Group controlId="FormCheckIn">
                  <Form.Label>Sign Out</Form.Label>
                  <Form.Control
                    type="date"
                    name="sign_out"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.check_out}
                    className="{touched.sign_out && errors.sign_out ? 'error' : null} form-radius"
                  />
                  {touched.sign_out && errors.sign_out ? (
                    <div className="error-message-white">{errors.check_out}</div>
                  ) : null}
                </Form.Group>
                <Button type="submit" disabled={isSubmitting} className="upperCase resBtn">
                  Reserve
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sailvation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default AddReservation;
