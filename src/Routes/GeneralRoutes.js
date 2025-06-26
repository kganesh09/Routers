// GeneralRoutes.js
import Protected from '../Auth/Protected';
import GeneralLayout from '../Layouts/GeneralLayout';

const GeneralRoutes = () => {
  return (
    <Protected>
      <GeneralLayout />
    </Protected>
  );
};

export default GeneralRoutes;
