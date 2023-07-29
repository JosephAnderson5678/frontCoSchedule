import Alert from '@mui/material/Alert';

function ErrorSuccessAlerts(props){
return (
    <>
    {props.openError && <Alert severity="error" onClose={() => props.setOpenError(!props.openError)}>Error Alert: {props.openErrorMessage}</Alert>}
    {props.openSuccess && <Alert severity="success" onClose={() => props.setOpenSuccess(!props.openSuccess)}>Success: {props.openSuccessMessage}</Alert>}

    </>
)

}

export default ErrorSuccessAlerts