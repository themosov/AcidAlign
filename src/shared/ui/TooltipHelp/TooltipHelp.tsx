import { Tooltip, TooltipProps } from "@mui/material";
import TooltipIcon from "@/shared/assets/icons/IconTooltip.svg";

type TooltipHelpProps = Omit<TooltipProps, "children">;

export const TooltipHelp = ({ title }: TooltipHelpProps) => {
    return (
        <Tooltip arrow title={title}>
            <span>
                <TooltipIcon />
            </span>
        </Tooltip>
    );
};
