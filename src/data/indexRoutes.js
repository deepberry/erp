export default [
    // {
    //     name: "ied",
    //     path: "/ied",
    //     component: () => import("../views/Ied.vue"),
    // },
    {
        name: "erpPlant",
        path: "/erp/plant",
        component: () => import("../views/erp/Plant.vue"),
        children: [
            {
                name: "erpPlantDetail",
                path: "/erp/plant/detail",
                component: () => import("../components/plant/PlantDetail.vue"),
            },
        ],
    },
    {
        name: "erpPlantHistory",
        path: "/erp/plant/history",
        component: () => import("../components/plant/PlantHistory.vue"),
    },
    {
        name: "erpPlantHistoryDetail",
        path: "/erp/plant/history/detail",
        component: () => import("../components/plant/PlantHistoryDetail.vue"),
    },
    {
        name: "erpPlantCropsDetail",
        path: "/erp/plant/crops/detail",
        component: () => import("../components/plant/PlantCropsDetail.vue"),
    },
    {
        name: "erpTask",
        path: "/erp/task",
        component: () => import("../views/erp/Task.vue"),
    },
    {
        name: "erpPurchase",
        path: "/erp/purchase",
        component: () => import("../views/erp/Purchase.vue"),
        children: [
            {
                name: "erpPurchaseOrder",
                path: "/erp/purchase/order",
                component: () => import("../components/purchase/PurchaseOrder.vue"),
            },
            {
                name: "erpPurchaseShop",
                path: "/erp/purchase/shop",
                component: () => import("../components/purchase/PurchaseShop.vue"),
            },
        ],
    },
    {
        name: "erpPurchaseShopDetail",
        path: "/erp/purchase/shop/detail",
        component: () => import("../components/purchase/PurchaseShopDetail.vue"),
    },
    {
        name: "erpStock",
        path: "/erp/stock",
        component: () => import("../views/erp/Stock.vue"),
        children: [
            {
                name: "erpStockList",
                path: "/erp/stock/list",
                component: () => import("../components/stock/StockList.vue"),
            },
        ],
    },
    {
        name: "erpStockOut",
        path: "/erp/stock/out",
        component: () => import("../components/stock/StockOut.vue"),
    },
    {
        name: "erpStockPut",
        path: "/erp/stock/put",
        component: () => import("../components/stock/StockPut.vue"),
    },
    {
        name: "StockRecord",
        path: "/erp/stock/record",
        component: () => import("../components/stock/StockRecord.vue"),
    },
    {
        name: "erpWorkOrder",
        path: "/erp/workOrder",
        component: () => import("../views/erp/WorkOrder.vue"),
    },
    {
        name: "erpStatistics",
        path: "/erp/statistics",
        component: () => import("../views/erp/Statistics.vue"),
        children: [
            {
                name: "erpStatisticsProduct",
                path: "/erp/statistics/product",
                component: () => import("../components/statistics/StatisticsProduct.vue"),
            },
            {
                name: "erpStatisticsStock",
                path: "/erp/statistics/stock",
                component: () => import("../components/statistics/StatisticsStock.vue"),
            },
            {
                name: "erpStatisticsWork",
                path: "/erp/statistics/work",
                component: () => import("../components/statistics/StatisticsWork.vue"),
            },
        ],
    },
    {
        name: "erpMy",
        path: "/erp/my",
        component: () => import("../views/erp/My.vue"),
        children: [
            {
                name: "erpMyProduct",
                path: "/erp/my/product",
                component: () => import("../components/my/MyProduct.vue"),
            },
            {
                name: "erpMyWork",
                path: "/erp/my/work",
                component: () => import("../components/my/MyWork.vue"),
            },
        ],
    },
    {
        name: "erpMyStartGet",
        path: "/erp/my/get",
        component: () => import("../components/my/MyStartGet.vue"),
    },
    {
        name: "erpMyGetRecord",
        path: "/erp/my/record",
        component: () => import("../components/my/MyGetRecord.vue"),
    },
    {
        name: "erpMyWorkTime",
        path: "/erp/my/workTime",
        component: () => import("../components/my/MyWorkTime.vue"),
    },
    // {
    //     name: "accountSubAccount",
    //     path: "/account/subAccount",
    //     component: () => import("../views/account/SubAccount.vue"),
    // },
    {
        name: "accountRole",
        path: "/account/role",
        component: () => import("../views/account/Role.vue"),
    },
];
