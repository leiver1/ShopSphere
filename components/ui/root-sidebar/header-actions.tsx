import SettingDialog from "../popups/settings/SettingDialog";

interface headerActionsProp {}
const headerActions: React.FC<headerActionsProp> = () => {
  return (
    <div className="flex items-center gap-4">
      <SettingDialog />
    </div>
  );
};

export default headerActions;
