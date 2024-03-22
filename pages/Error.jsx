import { Alert} from 'antd';
import { Button} from 'antd';
import { Link } from 'react-router-dom';
export default function Error() {
  return (
   <>
    <Alert
      message="Error"
      description="This is Page is not found!!.............."
      type="error"
      showIcon
    />
   <Link to="/">
   <Button style={{marginTop:"20px"}} type="primary" danger>
    Back to Home
  </Button>
   </Link>
   </>
  )
}
