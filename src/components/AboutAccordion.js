import Accordion from 'react-bootstrap/Accordion';

const AboutAccordion = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='accord-header'>MISSION</Accordion.Header>
            <Accordion.Body>
                To provide apparel that vocalizes and celebrates the joys and challenges of
                teacher life, all while adding some humor.
            </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='accord-header'>VALUES</Accordion.Header>
            <Accordion.Body>
                <p>• Offer stylish swag that links to the latest trends and teacher slang.</p>
                <p>• Provide a safe space for teachers to freely express themselves.</p>
                <p>• Continue encouraging educators to offer the best educational experience for
                    their students.</p>
            </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className='accord-header'>TYPES OF APPAREL</Accordion.Header>
            <Accordion.Body>
                <p>We offer the following apparel for teachers:</p>
                <p>• Shirts, Short-Sleeve, and Long-Sleeve</p>
                <p>• Hoodies</p>
                <p>• CDC Approved Masks</p>
                <p>• Mugs</p>
                <p>• Handbags</p>
                <p>• Shirts for your child or favorite student</p>
            </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AboutAccordion;