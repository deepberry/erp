<template>
    <div class="stock inner">
        <div class="box">
            <div class="head">
                <div class="head">
                    <span
                        @click="tabClick(index)"
                        :class="activeTabIndex == index ? 'active' : ''"
                        v-for="(item, index) in headTab"
                        :key="item.title"
                        >{{ item.title }}</span
                    >
                </div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "stock",
    data() {
        return {
            headTab: [
                {
                    title: "农资库存",
                    path: "/erp/stock/list",
                },
            ],
            activeTabIndex: 0,
        };
    },
    mounted() {
        // 默认进入列表
        this.$router.push(this.headTab[0].path);
    },
    methods: {
        // 去采购
        gotoPurchase() {
            this.$message.success("跳转到采购链接。。。");
        },
    },
};
</script>

<style lang="less" scoped>
@import url("@/assets/css/inner.less");
.inner .box .ctrl .search .searchInput {
    width: 320px;
}
</style>
