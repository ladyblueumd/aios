'use client';

import { IconType } from 'react-icons';
import { 
  MdSmartToy, 
  MdStorage, 
  MdCode, 
  MdStore, 
  MdReceipt, 
  MdAccountBalance, 
  MdBuild, 
  MdLocationOn,
  MdWifi,
  MdBusiness,
  MdCheck,
  MdArrowForward,
  MdOpenInNew,
  MdRocket,
  MdSchool,
  MdWork,
  MdStar,
  MdEmail,
  MdPhone,
  MdTrendingUp,
  MdPeople,
  MdLightbulb,
  MdSchedule,
  MdSend,
  MdBusinessCenter,
  MdSupport,
  MdAccessTime,
  MdArticle,
  MdDateRange,
  MdPerson,
  MdSecurity,
  MdInfo,
  MdMap,
  MdList,
  MdAnalytics,
  MdPayment,
  MdRestaurant,
  MdMonitor,
  MdSpeed,
  MdCloud,
  MdIntegrationInstructions,
  MdWeb,
  MdDeveloperBoard,
  MdMonetizationOn,
  MdShield,
  MdBackup,
  MdNetworkCheck,
  MdVerifiedUser,
  MdCloudSync,
  MdMonitorHeart
} from 'react-icons/md';

// Icon mapping for string to component conversion (same as Tile component)
const iconMap: { [key: string]: IconType } = {
  'MdSmartToy': MdSmartToy,
  'MdStorage': MdStorage,
  'MdCode': MdCode,
  'MdStore': MdStore,
  'MdReceipt': MdReceipt,
  'MdAccountBalance': MdAccountBalance,
  'MdBuild': MdBuild,
  'MdLocationOn': MdLocationOn,
  'MdWifi': MdWifi,
  'MdBusiness': MdBusiness,
  'MdCheck': MdCheck,
  'MdArrowForward': MdArrowForward,
  'MdOpenInNew': MdOpenInNew,
  'MdRocket': MdRocket,
  'MdSchool': MdSchool,
  'MdWork': MdWork,
  'MdStar': MdStar,
  'MdEmail': MdEmail,
  'MdPhone': MdPhone,

  'MdTrendingUp': MdTrendingUp,
  'MdPeople': MdPeople,
  'MdLightbulb': MdLightbulb,
  'MdSchedule': MdSchedule,
  'MdSend': MdSend,
  'MdBusinessCenter': MdBusinessCenter,
  'MdSupport': MdSupport,
  'MdAccessTime': MdAccessTime,
  'MdArticle': MdArticle,
  'MdDateRange': MdDateRange,
  'MdPerson': MdPerson,
  'MdSecurity': MdSecurity,
  'MdInfo': MdInfo,
  'MdMap': MdMap,
  'MdList': MdList,
  'MdAnalytics': MdAnalytics,
  'MdPayment': MdPayment,
  'MdRestaurant': MdRestaurant,
  'MdMonitor': MdMonitor,
  'MdSpeed': MdSpeed,
  'MdCloud': MdCloud,
  'MdIntegrationInstructions': MdIntegrationInstructions,
  'MdWeb': MdWeb,
  'MdDeveloperBoard': MdDeveloperBoard,
  'MdMonetizationOn': MdMonetizationOn,
  'MdShield': MdShield,
  'MdBackup': MdBackup,
  'MdNetworkCheck': MdNetworkCheck,
  'MdVerifiedUser': MdVerifiedUser,
  'MdCloudSync': MdCloudSync,
  'MdMonitorHeart': MdMonitorHeart,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

const Icon = ({ name, className = '', size }: IconProps) => {
  const IconComponent = iconMap[name] || MdBusiness;
  
  const props: any = {
    className: className
  };
  
  if (size) {
    props.style = { width: size, height: size };
  }
  
  return <IconComponent {...props} />;
};

export default Icon; 