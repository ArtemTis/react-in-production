import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = (): void => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button
                type="button"
                onClick={onToggle}
            >
                toggle
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.Lang} />
            </div>
        </div>
    );
};
