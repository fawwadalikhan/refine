import { useTranslate } from "@pankod/refine-core";

import { Chip, ChipProps } from "@pankod/refine-mui";

type OrderStatusProps = {
    status?: "Pending" | "Ready" | "On The Way" | "Delivered" | "Cancelled";
};

export const OrderStatus: React.FC<OrderStatusProps> = ({ status }) => {
    const t = useTranslate();
    let color: ChipProps["color"];

    switch (status) {
        case "Pending":
            color = "warning";
            break;
        case "Ready":
            color = "success";
            break;
        case "On The Way":
            color = "info";
            break;
        case "Delivered":
            color = "secondary";
            break;
        case "Cancelled":
            color = "error";
            break;
    }

    return (
        <Chip
            variant="outlined"
            size="small"
            color={color}
            label={t(`enum.orderStatuses.${status}`)}
        />
    );
};
