# AL NUBRAS ERP System

> 专为定制服装、成衣零售及配饰销售行业设计的综合企业资源计划（ERP）系统。系统覆盖从前端门店销售、客户量体定制，到后端裁缝生产、库存管理、物流配送以及财务核算的全业务生命周期。

## 系统登录

- 系统提供统一的登录入口，输入用户名和密码后进入管理员主控台。
- 主控台以宫格菜单形式展示所有业务模块入口：Sales（销售）、Manufacturing（生产）、Inventory（库存）、Delivery（配送）、Marketing（营销）、Finance（财务）。

---

## 一、销售模块 (Sales Module)

销售模块是系统的核心交易模块，由前端销售人员使用，涵盖从客户接待到完成收款的完整闭环流程。

### 1.1 创建订单 (Create Sales)

- 销售人员录入客户基本信息：**手机号码**和**客户姓名**。
- 点击 **START / CREATE** 后进入商品选购流程。
- 页面顶部始终显示当前操作的销售员信息（姓名及岗位）。

### 1.2 商品类别选择 (Order Category Menu)

- 展示当前客户信息（姓名、手机号、所在城市）。
- 提供六大商品品类入口：
  - **KANDURA**（坎度拉 — 阿拉伯传统长袍，定制类）
  - **UNDER GARMENTS**（内衣配饰 — Shemagh、Ghutra、Agal 等）
  - **JACKET**（夹克外套）
  - **HEAD DRESS**（头饰）
  - **SANDAL**（凉鞋）
  - **CUSTOMIZE ORDER**（自定义订单）
- 底部提供 **VIEW CART** 按钮，显示当前购物车商品数量徽标。
- 同时提供快捷入口：**Track Existing Orders**（追踪现有订单）和 **Order Records**（历史订单记录）。

### 1.3 Kandura 定制 (Kandura Customization)

这是系统最核心的定制流程，用于录入传统长袍的量体数据和面料选择：

- **款式切换**：支持 Arabic（阿拉伯式）、Kuwaiti（科威特式）、Jalabiya（贾拉比亚式）、Mugasar（穆卡萨式）四种款式 Tab 切换。
- **量体数据**：提供 9 项尺寸输入字段：
  - Length（衣长）、Back Length（后衣长）、Shoulder（肩宽）
  - Arm Length（袖长）、Cuff Width（袖口宽）、Waist（腰围）
  - Chest（胸围）、Hip（臀围）、Bottom Width（下摆宽）
- **面料选择**：录入面料类型（如 Premium 01）、颜色代码（如 A1），系统自动生成面料编号（P01-A1）。
- **关联客户**：支持将商品指定给客户本人或其家庭成员（如 Bob (Son)、Ahmed (Brother)）。
- **快捷添加**：可勾选同时添加 Shirts（衬衫 Size M）和 Wizars（围裙 Size L）。
- **特殊备注**：文本框中记录客户特殊要求（如"Customer wants double stitching on the back. Tarbush @ 22 inches."）。
- 点击 **ADD TO CART** 将所有选项加入购物车。

### 1.4 成品商品选购 (Sandals / Jackets / Under Garments / Head Dress)

针对非定制类成品商品，提供统一的选购流程：

- **商品列表**：以 2×2 网格卡片展示同类商品，每张卡片显示商品图片占位、商品编号（如 AN-S12）、名称和价格。
- **商品详情**：
  - 商品大图展示区
  - **颜色选择**：以色块圆形 swatch 展示可选颜色（White / Brown / Black / Tan / Red），点击切换。
  - **尺码选择**：圆形尺码按钮（如 36-43 或 48-54），点击高亮选中。
  - **数量选择**：通过 +/− 按钮增减数量。
  - 价格显示及 **ADD TO CART** 按钮。

### 1.5 购物车 (Cart)

- 以表格形式列出所有已加购商品：商品名、数量、单价、小计。
- 每行提供 **删除** 按钮，可移除单个商品。
- 底部汇总区：
  - **SUBTOTAL**（小计）— 自动计算
  - **DISCOUNT**（折扣）— 可手动输入
  - **DELIVERY**（运费）— 默认 100 AED，可修改
  - **NET TOTAL**（净总价）— 实时更新
- 点击 **CHECKOUT** 进入结账流程。

### 1.6 结账 (Checkout)

- 系统自动生成订单编号（格式：A2025-XXXX，自增）。
- 展示完整的费用明细：
  - 商品小计
  - **5% VAT**（增值税）— 自动计算
  - 运费
  - **TOTAL**（含税总价，单位 AED）
- 点击 **PROCEED TO PAYMENT** 进入发票与支付页面。

### 1.7 税务发票与支付 (Tax Invoice & Payment)

- 显示发票编号。
- 提供三种支付方式切换（Tab 形式）：
  - **CARD（刷卡）**：提供"Send to Card Reader"按钮，模拟发送至读卡器。
  - **CASH（现金）**：输入实收现金金额，系统自动计算找零金额。
  - **ONLINE（在线支付）**：生成支付链接，支持一键复制和通过 WhatsApp 发送链接。
- **预付款输入**：录入客户预付金额，系统自动计算剩余应付款。
- 点击 **UPDATE SALE / COMPLETE** 完成订单，自动清空购物车并跳转回销售中心。
- 支持 **PRINT INVOICE** 打印发票。

### 1.8 订单追踪 (Order Tracker)

- 提供搜索框，支持按订单号或客户名搜索。
- 以水平进度条展示订单所处阶段，共 6 个节点：
  - **Measured**（已量体） → **Cutting**（裁剪中） → **Sewing**（缝制中） → **Ready**（准备就绪） → **Out for Delivery**（派送中） → **Delivered**（已送达）
- 当前所处阶段及之前的节点高亮显示。
- 进度条下方显示订单详情（订单号、商品名称、关联人等）。

### 1.9 订单历史 (Order History)

- 以表格形式展示所有历史订单：订单号、客户名、日期、总金额。
- 未结清付款的订单显示 ⚠ 警告图标，已付款的订单显示 ✓ 标识。
- 点击任意订单行进入订单详情页面。

### 1.10 订单详情与售后操作 (Order Detail & Actions)

- 展示订单的完整信息：客户、手机号、日期、总金额、付款状态。
- 以表格列出订单内各商品及其当前生产状态（状态标签颜色区分）。
- 提供三个售后操作按钮（各弹出独立的模态对话框）：
  - **File Complaint**（提交投诉）— 填写问题描述
  - **Return to Inventory**（退回库存）— 确认将商品退回
  - **Request Return Sale**（申请退款）— 确认退款请求

### 1.11 销售运营 (Sales Operations)

- 显示当前销售员待上交的现金金额。
- 提供 24 小时内上交的 **警告提示**。
- 点击 **TURNOVER** 按钮完成现金移交操作，金额归零。
- 展示相关通知（如某订单存在付款异常）。

### 1.12 挂起订单 (Sales Pending)

- 展示所有未完成/中断的订单列表，包含客户姓名、商品数量和最后更新时间。
- 每条记录提供两个操作：
  - **CONTINUE**（继续）— 载入客户信息，恢复选购流程
  - **CANCEL**（取消）— 从列表中移除该挂起订单

---

## 二、生产与缝纫模块 (Manufacturing Module)

由工厂或裁缝车间管理人员使用，用于分配和跟进定制服装的生产进度。

### 2.1 裁剪订单看板 (Cutting Orders)

- 以数据表格集中展示所有待生产的订单，字段包括：
  - 订单号、商品名称、数量、客户名称、当前状态
- 状态以颜色标签区分：Started（蓝色）、Cutting（蓝色）、Sewing（橙色）、Ready（绿色）、Pending（红色）。
- 点击任意行进入裁缝分配页面。

### 2.2 裁缝分配 (Tailor Assignment)

- 展示选中订单的完整信息（客户、商品、数量、当前状态）。
- 如果该订单所需裁缝人数不足，系统显示 **警告提示**（如"Need 1 more tailor to start order"）。
- 提供裁缝下拉选择器，列出所有可用裁缝的姓名及专长。
- 点击 **START ORDER** 确认分配并启动生产。
- 点击 **SEND WHATSAPP** 按钮弹出 WhatsApp 消息模拟窗口，展示将要发送给裁缝的订单信息文本（如"Requesting Update on ORDER# A2025-0035 for MR. RADWAN 3pcs Arabic Kandura"）。

---

## 三、配送与物流模块 (Delivery Module)

由送货员使用，管理货物从工厂/商场到各门店/客户的运输流转。

### 3.1 配送请求列表 (Delivery Requests)

- 以数据表格展示所有配送任务，字段包括：
  - 日期、提货地（如 Al Wathba Factory / Mussafa Mall）
  - 送货地（如 Alnubras Shop / Abu Dhabi Branch）
  - 物品明细、客户姓名及联系电话
  - 付款状态：**Fully Paid**（绿色）或 **Payment Pending**（红色）

### 3.2 配送操作 (Delivery Operations)

- 顶部显示 **24 小时内上交代收货款** 的警告提示。
- 以卡片形式展示每条配送任务摘要（订单号、客户、起止点、物品、付款状态）。
- 根据配送状态提供不同操作按钮：
  - 待取件 → **Proceed to Pick-up**
  - 待收款 → **Proceed to Payment**

---

## 四、财务与会计模块 (Accountant Module)

由财务人员使用，对整个企业的资金流与人力成本进行稽核与分析。

### 4.1 应收账款 (Account Receivables)

- 以表格展示所有订单的回款状态：订单号、客户、金额、付款状态。
- 清晰标注 **Fully Paid**（已付清）和 **Payment Pending**（待收款）。

### 4.2 现金流管理 (Cash Management)

- 汇总展示：
  - **Total Sales**（总销售额）
  - **Expenses**（总支出）
  - **Balance**（余额）— 自动计算

### 4.3 员工档案 (Employee Records)

- **裁缝列表**：姓名、联系电话、专长工艺。
- **销售人员列表**：姓名、联系电话、岗位角色。

### 4.4 财务报表 (Finance Reports)

- **销售报表 (Sales Report)**：
  - 总订单数、总收入、已收款订单数
- **支出报表 (Expense Report)**：
  - 面料成本、人工成本、总支出

---

## 五、库存管理模块 (Inventory Module)

由库存管理员使用，负责所有布料及成品的出入库与档案管理。

### 5.1 查看关联订单 (View Orders)

- 展示当前所有销售订单的生产需求，方便库管了解库存消耗预期。
- 以表格展示：订单号、商品、数量、状态。

### 5.2 库存流出记录 (Outflow)

- 详尽记录所有因订单消耗而产生的出库历史。
- 字段：物料类型（如 Jacket / Sandals / Kandura Fabric）、关联订单号、数量、日期。
- 支持 **打印** 功能。

### 5.3 添加布料 (Add Fabric)

- 表单字段：
  - **Fabric Type**（布料类型）
  - **Shop Code**（店铺编码）
  - **Color(s)**（颜色）
  - **Category**（适用品类）— 下拉选择：Kandura / Mugasr / Jalabiya
  - **Notes**（备注）
- 点击 **SAVE FABRIC** 保存并跳转至布料管理页面。

### 5.4 管理布料 (Manage Fabric)

- 以表格展示所有已登记的布料：类型、编号、颜色、品类、登记日期。
- 每行提供 **删除** 操作按钮。

### 5.5 添加商品 (Add Items)

- 先选择商品大类：Sandals（凉鞋）、Jackets（夹克）、Head Accessories（头饰配件）、Under Garments（内衣）。
- 进入对应的专属录入表单：
  - **Name**（名称）
  - **Color**（颜色）
  - **Code**（编号）
  - **Sizes**（可用尺码，逗号分隔）
  - **Quantity**（库存数量）
  - **Price**（单价）
  - **Description**（描述）
  - **Image**（商品图片上传占位）
- 点击 **SAVE ITEM** 保存到库存系统。

### 5.6 管理商品 (Manage Items)

- 顶部提供分类筛选 Tab：All / Sandal / Jacket / Accessory / HeadDress，点击切换过滤视图。
- 以表格展示所有商品：名称、编号、颜色、可用尺码、库存数量、价格。
- 每行提供 **删除** 操作按钮。

---

## 快速启动

```bash
python3 -m http.server 8080
```

在浏览器中打开 `http://localhost:8080`