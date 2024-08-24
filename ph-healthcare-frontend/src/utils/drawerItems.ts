import { USER_ROLE } from "@/contants/role";
import { DrawerItem, UserRole } from "@/types";
import GroupIcon from '@mui/icons-material/Group';

// icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ScheduleIcon from '@mui/icons-material/Schedule';

export const drawerItems = (role: UserRole): DrawerItem[] => {
    const roleMenus: DrawerItem[] = [];

switch (role) {
    case USER_ROLE.SUPER_ADMIN:
        roleMenus.push(
            {
                title: "Dashboard",
                path: `${role}`,
                icon: DashboardIcon,
            },
            {
                title: "Manage Users",
                path: `${role}/manage-users`,
                icon: GroupIcon,
            }
        );
        break;


        case USER_ROLE.ADMIN:
            roleMenus.push(
                {
                    title: "Dashboard",
                    path: `${role}`,
                    icon: DashboardIcon,
                },
                {
                    title: "Specialties",
                    path: `${role}/specialties`,
                    icon: GroupIcon,
                },
                {
                    title: "Doctors",
                    path: `${role}/doctors`,
                    icon: MedicalInformationIcon,
                },
                {
                    title: "Schedules",
                    path: `${role}/schedules`,
                    icon: CalendarMonthIcon,
                },
                {
                    title: "Appointments",
                    path: `${role}/appointments`,
                    icon: CalendarMonthIcon,
                },
                {
                    title: "Reviews",
                    path: `${role}/reviews`,
                    icon: ReviewsIcon,
                },
            );
            break;
            case USER_ROLE.DOCTOR:
                roleMenus.push(
                    {
                        title: "Dashboard",
                        path: `${role}`,
                        icon: DashboardIcon,
                    },
                    {
                        title: "Schedule",
                        path: `${role}/schedule`,
                        icon: ScheduleIcon,
                    },
                    {
                        title: "Appointments",
                        path: `${role}/appointment`,
                        icon: CalendarMonthIcon,
                    },
                );
                break;
                case USER_ROLE.PATIENT:
                    roleMenus.push(
                        {
                            title: "Appointments",
                            path: `${role}/appointment`,
                            icon: CalendarMonthIcon,
                        },
                        {
                            title: "Prescripions",
                            path: `${role}/prescripion`,
                            icon: DashboardIcon,
                        },
                        {
                            title: "Payment History",
                            path: `${role}/payment -history`,
                            icon: DashboardIcon,
                        },
                    );
                    break; 
                    
                    default:
                        break;
        }   

        return [...roleMenus];
};