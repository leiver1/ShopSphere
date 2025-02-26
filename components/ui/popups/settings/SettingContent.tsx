import Account from "./contents/Account";
import Appearance from "./contents/Appearance";
import Chat from "./contents/Chat";
import Notifications from "./contents/Notifications";
import Profile from "./contents/Profile";
import VoiceAndCamera from "./contents/VoiceAndCamera";

interface SettingContentProps {
  currentIndex: number;
}
const SettingContent: React.FC<SettingContentProps> = ({ currentIndex }) => {
  const settingContent = [
    {
      jsx: <Profile />,
    },
    {
      jsx: <Account />,
    },
    {
      jsx: <Chat />,
    },
    {
      jsx: <VoiceAndCamera />,
    },
    {
      jsx: <Appearance />,
    },
    {
      jsx: <Notifications />,
    },
  ];
  return <div>{settingContent[currentIndex].jsx}</div>;
};

export default SettingContent;
