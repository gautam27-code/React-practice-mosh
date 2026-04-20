
const Alert = ({children, close}) => {
  return (
    <div className="alert alert-primary alert-dismissible">
        {children}
        <button type="button" className="btn-close" onClick={close} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert