/* global Chart */
// ==================== LANGUAGE SYSTEM ====================
let currentLang = localStorage.getItem('lang') || 'en';

const translations = {
    en: {
        nav_dashboard:'Dashboard', nav_rooms:'Room Management', nav_checkin:'Check In',
        nav_checkout:'Check Out', nav_services:'Services', nav_history:'History & Records',
        nav_reports:'Reports', nav_purchases:'Purchases', nav_settings:'Settings', nav_logout:'Logout', nav_shift_report:'Shift Report',
        all_status:'All Status', status_available:'Available', status_occupied:'Occupied',
        status_reserved:'Reserved', status_cleaning:'Cleaning', status_checkout:'Checkout',
        all_floors:'All Floors', floor_prefix:'Floor', all_types:'All Types',
        min_price:'Min Price', max_price:'Max Price', reset:'Reset',
        edit:'Edit', details:'Details', per_night:'per night', cancel:'Cancel', close:'Close',
        search:'Search', no_data:'No data available', na:'N/A',
        room_prefix:'Room', floor_label:'Floor', capacity_label:'Capacity',
        guests_label:'guests', guest_label:'Guest', phone_label:'Phone',
        check_in_label:'Check In', check_out_label:'Check Out', nights_label:'nights',
        not_occupied:'Not occupied', none_label:'None', open_label:'Open',
        stat_available:'Available Rooms', stat_occupied:'Occupied Rooms',
        stat_income:'Total Income', stat_guests_today:'Guests Today',
        chart_daily_income:'Daily Income', chart_room_status:'Room Status Distribution',
        recent_activities:'Recent Activities',
        col_guest_name:'Guest Name', col_room:'Room', col_action:'Action',
        col_time:'Time', col_amount:'Amount', no_recent:'No recent activities',
        add_new_room:'Add New Room',
        available_rooms_title:'Available Rooms', max_price_night:'Max Price / Night',
        form_guest_checkin:'Guest Check In',
        form_fill_required:'Fill in all required fields to register the guest',
        section_room_info:'Room Information', section_guest_details:'Guest Details',
        section_stay_duration:'Stay Duration', section_pricing:'Pricing',
        label_room_number:'Room Number', label_room_type:'Room Type',
        label_full_name:'Full Name', label_phone:'Phone Number',
        label_nationality:'Nationality', label_id_type:'ID Type',
        label_num_guests:'Number of Guests', label_id_number:'ID / Passport Number',
        label_email:'Email Address', label_checkin_date:'Check In Date & Time',
        label_checkout_date:'Check Out Date & Time',
        label_price_iqd:'Price (IQD)', label_price_usd:'Price (USD)',
        label_nights:'Nights', label_per_night:'Per Night', label_total:'Total',
        btn_checkin_guest:'Check In Guest', btn_reset_form:'Reset',
        select_room_placeholder:'Select a room', select_id_type:'Select ID type',
        opt_passport:'Passport', opt_national_id:'National ID', opt_driver_license:'Driver License',
        occupied_rooms_title:'Occupied Rooms',
        checkout_invoice_title:'Guest Check Out & Invoice',
        select_room_checkout:'Select a room to proceed with checkout',
        guest_information:'Guest Information', invoice_summary:'Invoice Summary',
        col_description:'Description', services_label:'Services',
        subtotal_label:'Subtotal', tax_label:'Tax', grand_total_label:'GRAND TOTAL',
        room_charges:'Room Charges', btn_confirm_checkout:'Confirm Checkout',
        btn_print_invoice:'Print Invoice', change_adjust:'Change to adjust the invoice',
        services_hint:'Click on an <span class="font-semibold text-red-500">occupied</span> room to add services to the guest\'s bill.',
        btn_add_service:'Add Service',
        search_history_title:'Search History', search_by_name:'Search by guest name',
        search_by_room:'Search by room number', guest_records_title:'Guest Records',
        col_check_in:'Check In', col_check_out:'Check Out',
        col_total_amount:'Total Amount', no_records:'No records found', btn_view:'View',
        reports_title:'Reports & Export', btn_daily:'Daily', btn_weekly:'Weekly',
        btn_monthly:'Monthly', btn_yearly:'Yearly', btn_export_all:'Export All',
        stat_total_revenue:'Total Revenue', stat_total_guests:'Total Guests',
        stat_occupancy:'Occupancy Rate', stat_avg_price:'Avg Room Price',
        chart_monthly_revenue:'Monthly Revenue', chart_top_rooms:'Top Rooms by Revenue',
        room_history_report:'Room History Report',
        col_type:'Type', col_last_guest:'Last Guest', col_stays:'Stays',
        col_total_revenue:'Total Revenue', col_avg_rating:'Avg Rating',
        btn_add_purchase:'Add Purchase', col_num:'#', col_name:'Name',
        col_price:'Price', col_quantity:'Quantity', col_total:'Total',
        col_date:'Date', no_purchases:'No purchases yet',
        nav_outside_income:'Outside Income', btn_add_outside_income:'Add Outside Income',
        modal_add_outside_income:'Add Outside Income', no_outside_income:'No outside income yet',
        toast_outside_income_added:'Outside income added successfully!',
        toast_outside_income_deleted:'Outside income deleted.',
        hotel_settings_title:'Hotel Settings', label_hotel_name:'Hotel Name',
        label_currency:'Currency', label_tax_rate:'Tax Rate (%)',
        exchange_rate_title:'Exchange Rate', label_exchange_rate:'1 USD = ? IQD',
        exchange_rate_hint:'Used to convert between USD and IQD at checkout (room price, deposit, services, and payment all get compared using this rate).',
        checkout_cutoff_title:'Late Checkout Rule', label_checkout_cutoff:'Checkout Time',
        checkout_cutoff_hint:'If a guest is still in the room past this time on their checkout date, another night is automatically added to the bill.',
        lbl_late_checkout:'Late Checkout — Extra Night Added',
        late_checkout_note:'Guest was still in the room past', on_their_planned_checkout_date:'on their planned checkout date',
        checkout_date_updated_to:'checkout date updated to',
        room_config_title:'Room Configuration', label_total_rooms:'Total Rooms',
        room_types_title:'Room Types', btn_add_room_type:'Add Room Type',
        service_items_title:'Service Items', btn_add_service_item:'Add Service Item',
        btn_save_settings:'Save Settings', btn_export_data:'Export Data',
        modal_add_edit_room:'Add/Edit Room',
        label_room_number_req:'Room Number *', label_room_type_req:'Room Type *',
        label_price_per_night:'Price per Night *', label_capacity:'Capacity',
        label_floor:'Floor', label_description:'Description',
        btn_save_room:'Save Room', select_room_type:'Select room type',
        modal_add_order:'Add Order/Extra Service', label_service_item:'Service Item *',
        select_service_item:'Select service item',
        label_quantity_req:'Quantity *', label_unit_price:'Unit Price *',
        label_notes:'Notes', btn_add_order:'Add Order',
        notes_placeholder:'Add any special notes',
        modal_add_purchase:'Add Purchase',
        label_name_req:'Name', label_price_req:'Price', label_quantity_opt:'Quantity',
        modal_guest_details:'Guest Details', orders_services_label:'Orders & Services',
        no_orders:'No orders', total_spent_label:'Total Spent',
        modal_room_details:'Room Details', modal_price_history:'Price Change History',
        col_changed_by:'Changed By', col_old_price:'Old Price', col_new_price:'New Price',
        col_change_date:'Change Date', col_reason:'Reason', no_price_changes:'No price changes',
        current_guest_label:'Current Guest', btn_edit_room:'Edit Room',
        toast_room_saved:'Room saved successfully!',
        toast_service_added:'Service added to guest bill!',
        toast_purchase_added:'Purchase added successfully!',
        toast_purchase_deleted:'Purchase deleted.',
        toast_settings_saved:'Settings saved successfully!',
        toast_fill_fields:'Please fill in all required fields.',
        toast_invalid_date:'Check out date must be after check in date',
        toast_room_unavailable:'Selected room is not available',
        toast_checkout_updated:'Checkout date updated! New total will be calculated.',
        toast_checkout_after:'Checkout date must be after check-in date!',
        toast_no_guest:'No active guest in this room.',
        toast_checkout_ok:'Guest checked out successfully!',
        toast_checkin_ok:'checked in successfully!',
        price_placeholder:'0',
        nav_cleaner:'Room Status',
        login_subtitle:'Management System',
        label_email_addr:'Email', label_password:'Password',
        enter_email:'Enter your email', enter_password:'Enter your password',
        btn_login:'Login', login_error:'Invalid email or password.',
        role_admin:'Admin', role_reception:'Reception', role_cleaner:'Cleaner',
        cleaner_page_title:'Room Status',
        cleaner_hint:'Select a room and change its status.',
        user_mgmt_title:'User Management', btn_add_user:'Add User',
        label_user_name:'Name', label_user_email:'Email',
        label_user_password:'Password', label_user_role:'Role',
        cleaner_statuses_title:'Cleaner Status Options',
        btn_add_cleaner_status:'Add Status',
        toast_status_updated:'Room status updated!',
        toast_cannot_delete_self:'You cannot delete your own account.',
        access_denied:'Access denied.',
        select_role:'Select role',
        logout_confirm:'Are you sure you want to logout?',
        service_categories_title:'Service Categories', btn_add_category:'Add Category',
        label_service_category:'Category', label_item_name:'Item Name',
        room_statuses_title:'Room Statuses',
        room_statuses_hint:'Customize room status labels and colors. System statuses cannot be deleted.',
        btn_add_status:'Add Status',
        label_status_label:'Label', label_status_color:'Color',
        label_bookable:'Bookable', system_badge:'System',
        reserve_room:'Reserve Room', btn_reserve:'Reserve',
        btn_group:'Group', lbl_group:'Group',
        confirm_group_checkin:'Check in this room as a Group (no guest details, no charges)?',
        toast_group_checkin:'Room checked in as Group.',
        btn_change_room:'Change Room', modal_change_room:'Change Reserved Room',
        label_select_new_room:'Move reservation to',
        toast_room_changed:'Reservation moved to the new room.',
        err_select_room:'Please select a room.',
        err_no_other_rooms:'No other available rooms to move this reservation to.',
        btn_add_deposit:'Add Deposit', modal_add_deposit:'Add Deposit',
        add_deposit_hint:'This amount is added on top of the deposit already paid (e.g. an extra advance for extending the stay).',
        lbl_deposit_so_far:'Deposit paid so far',
        err_enter_amount:'Enter at least one amount.',
        toast_deposit_added:'Deposit added successfully!',
        label_arrival_date:'Expected Arrival Date',
        label_agreed_price:'Agreed Price / Night',
        label_deposit:'Deposit Paid (IQD)',
        label_deposit_iqd:'Deposit (IQD)', label_deposit_usd:'Deposit (USD)',
        section_deposit:'Deposit / Advance Payment',
        deposit_hint:'Optional: Record any advance payment received from the guest.',
        lbl_deposit_paid:'Deposit Paid',
        lbl_deposit:'Deposit',
        payment_method_label:'Payment Method',
        payment_methods_title:'Payment Methods',
        btn_add_payment_method:'Add Payment Method',
        lbl_payment:'Payment',
        toast_room_reserved:'Room reserved successfully!',
        toast_reservation_cancelled:'Reservation cancelled.',
        btn_checkin_now:'Check In Now',
        cancel_reservation:'Cancel Reservation',
        arrives:'Arrives', reserved_for:'Reserved for',
        change_status_label:'Change Status',
        back:'Back',
        checkout_note_label:'Note',
        checkout_note_placeholder:'Add a note about this checkout (optional)...',
        lbl_balance_due:'Balance Due', lbl_fully_paid:'Fully covered by deposit',
        lbl_cash:'Cash', lbl_mastercard:'MasterCard',
        checkout_payment_title:'Checkout Payment',
        checkout_payment_hint:'Enter the amount being collected from the guest now.',
        err_checkout_payment_required:'Please enter the amount collected from the guest (Cash IQD, Cash USD, or MasterCard IQD).',
        err_checkout_payment_insufficient:'The amount entered is less than the balance due. Please collect the full balance before checking out.',
        lbl_remaining:'Remaining', lbl_change_due:'Change due',
        lbl_fully_paid_now:'Fully paid — no balance remaining',
        lbl_guest:'Guest', lbl_room:'Room', lbl_checkin:'Check-in', lbl_checkout:'Check-out',
        lbl_description:'Description', lbl_amount:'Amount',
        lbl_room_charges:'Room Charges', lbl_room_total:'Room Total',
        lbl_services_total:'Services Total', lbl_thank_you:'Thank you for staying with us!',
        lbl_invoice:'Invoice',
    },
    ar: {
        nav_dashboard:'لوحة التحكم', nav_rooms:'إدارة الغرف', nav_checkin:'تسجيل الدخول',
        nav_checkout:'تسجيل الخروج', nav_services:'الخدمات', nav_history:'السجلات والتاريخ',
        nav_reports:'التقارير', nav_purchases:'المشتريات', nav_settings:'الإعدادات',
        nav_logout:'تسجيل الخروج', nav_shift_report:'تقرير الوردية',
        all_status:'جميع الحالات', status_available:'متاحة', status_occupied:'مشغولة',
        status_reserved:'محجوزة', status_cleaning:'قيد التنظيف', status_checkout:'تم تسجيل الخروج',
        all_floors:'جميع الطوابق', floor_prefix:'الطابق', all_types:'جميع الأنواع',
        min_price:'أقل سعر', max_price:'أعلى سعر', reset:'إعادة تعيين',
        edit:'تعديل', details:'تفاصيل', per_night:'في الليلة', cancel:'إلغاء', close:'إغلاق',
        search:'بحث', no_data:'لا توجد بيانات', na:'غير متاح',
        room_prefix:'غرفة', floor_label:'الطابق', capacity_label:'السعة',
        guests_label:'ضيوف', guest_label:'الضيف', phone_label:'الهاتف',
        check_in_label:'الدخول', check_out_label:'الخروج', nights_label:'ليالٍ',
        not_occupied:'غير مشغولة', none_label:'لا أحد', open_label:'مفتوح',
        stat_available:'الغرف المتاحة', stat_occupied:'الغرف المشغولة',
        stat_income:'إجمالي الدخل', stat_guests_today:'ضيوف اليوم',
        chart_daily_income:'الدخل اليومي', chart_room_status:'توزيع حالة الغرف',
        recent_activities:'النشاطات الأخيرة',
        col_guest_name:'اسم الضيف', col_room:'الغرفة', col_action:'الإجراء',
        col_time:'الوقت', col_amount:'المبلغ', no_recent:'لا توجد نشاطات حديثة',
        add_new_room:'إضافة غرفة جديدة',
        available_rooms_title:'الغرف المتاحة', max_price_night:'أعلى سعر / ليلة',
        form_guest_checkin:'تسجيل دخول الضيف',
        form_fill_required:'أدخل جميع الحقول المطلوبة لتسجيل الضيف',
        section_room_info:'معلومات الغرفة', section_guest_details:'بيانات الضيف',
        section_stay_duration:'مدة الإقامة', section_pricing:'التسعير',
        label_room_number:'رقم الغرفة', label_room_type:'نوع الغرفة',
        label_full_name:'الاسم الكامل', label_phone:'رقم الهاتف',
        label_nationality:'الجنسية', label_id_type:'نوع الهوية',
        label_num_guests:'عدد الضيوف', label_id_number:'رقم الهوية / جواز السفر',
        label_email:'البريد الإلكتروني', label_checkin_date:'تاريخ ووقت الدخول',
        label_checkout_date:'تاريخ ووقت الخروج',
        label_price_iqd:'السعر (د.ع)', label_price_usd:'السعر (دولار)',
        label_nights:'الليالي', label_per_night:'في الليلة', label_total:'الإجمالي',
        btn_checkin_guest:'تسجيل دخول الضيف', btn_reset_form:'إعادة تعيين',
        select_room_placeholder:'اختر غرفة', select_id_type:'اختر نوع الهوية',
        opt_passport:'جواز سفر', opt_national_id:'بطاقة وطنية', opt_driver_license:'رخصة قيادة',
        occupied_rooms_title:'الغرف المشغولة',
        checkout_invoice_title:'تسجيل خروج الضيف والفاتورة',
        select_room_checkout:'اختر غرفة للمتابعة في عملية الخروج',
        guest_information:'معلومات الضيف', invoice_summary:'ملخص الفاتورة',
        col_description:'الوصف', services_label:'الخدمات',
        subtotal_label:'المجموع الجزئي', tax_label:'الضريبة', grand_total_label:'الإجمالي الكلي',
        room_charges:'رسوم الغرفة', btn_confirm_checkout:'تأكيد الخروج',
        btn_print_invoice:'طباعة الفاتورة', change_adjust:'غيّر لتعديل الفاتورة',
        services_hint:'انقر على غرفة <span class="font-semibold text-red-500">مشغولة</span> لإضافة خدمات إلى فاتورة الضيف.',
        btn_add_service:'إضافة خدمة',
        search_history_title:'البحث في السجلات', search_by_name:'البحث باسم الضيف',
        search_by_room:'البحث برقم الغرفة', guest_records_title:'سجلات الضيوف',
        col_check_in:'الدخول', col_check_out:'الخروج',
        col_total_amount:'المبلغ الإجمالي', no_records:'لا توجد سجلات', btn_view:'عرض',
        reports_title:'التقارير والتصدير', btn_daily:'يومي', btn_weekly:'أسبوعي',
        btn_monthly:'شهري', btn_yearly:'سنوي', btn_export_all:'تصدير الكل',
        stat_total_revenue:'إجمالي الإيرادات', stat_total_guests:'إجمالي الضيوف',
        stat_occupancy:'معدل الإشغال', stat_avg_price:'متوسط سعر الغرفة',
        chart_monthly_revenue:'الإيرادات الشهرية', chart_top_rooms:'أعلى الغرف إيراداً',
        room_history_report:'تقرير تاريخ الغرف',
        col_type:'النوع', col_last_guest:'آخر ضيف', col_stays:'الإقامات',
        col_total_revenue:'إجمالي الإيرادات', col_avg_rating:'التقييم',
        btn_add_purchase:'إضافة مشترى', col_num:'#', col_name:'الاسم',
        col_price:'السعر', col_quantity:'الكمية', col_total:'الإجمالي',
        col_date:'التاريخ', no_purchases:'لا توجد مشتريات',
        nav_outside_income:'دخل خارجي', btn_add_outside_income:'إضافة دخل خارجي',
        modal_add_outside_income:'إضافة دخل خارجي', no_outside_income:'لا يوجد دخل خارجي حتى الآن',
        toast_outside_income_added:'تم إضافة الدخل الخارجي بنجاح!',
        toast_outside_income_deleted:'تم حذف الدخل الخارجي.',
        hotel_settings_title:'إعدادات الفندق', label_hotel_name:'اسم الفندق',
        label_currency:'العملة', label_tax_rate:'نسبة الضريبة (%)',
        exchange_rate_title:'سعر الصرف', label_exchange_rate:'1 دولار = ؟ دينار عراقي',
        exchange_rate_hint:'يُستخدم لتحويل العملة بين الدولار والدينار العراقي عند تسجيل الخروج (سعر الغرفة، العربون، الخدمات، والدفع تتم مقارنتها جميعها بهذا السعر).',
        checkout_cutoff_title:'قاعدة التأخير عن وقت الخروج', label_checkout_cutoff:'وقت تسجيل الخروج',
        checkout_cutoff_hint:'إذا بقي النزيل في الغرفة بعد هذا الوقت في يوم تسجيل الخروج، تُضاف ليلة أخرى تلقائياً إلى الفاتورة.',
        lbl_late_checkout:'تأخير عن الخروج — تمت إضافة ليلة',
        late_checkout_note:'بقي النزيل في الغرفة بعد', on_their_planned_checkout_date:'في يوم تسجيل الخروج المحدد له',
        checkout_date_updated_to:'تم تحديث تاريخ الخروج إلى',
        room_config_title:'إعدادات الغرف', label_total_rooms:'إجمالي الغرف',
        room_types_title:'أنواع الغرف', btn_add_room_type:'إضافة نوع غرفة',
        service_items_title:'عناصر الخدمة', btn_add_service_item:'إضافة خدمة',
        btn_save_settings:'حفظ الإعدادات', btn_export_data:'تصدير البيانات',
        modal_add_edit_room:'إضافة / تعديل غرفة',
        label_room_number_req:'رقم الغرفة *', label_room_type_req:'نوع الغرفة *',
        label_price_per_night:'السعر في الليلة *', label_capacity:'السعة',
        label_floor:'الطابق', label_description:'الوصف',
        btn_save_room:'حفظ الغرفة', select_room_type:'اختر نوع الغرفة',
        modal_add_order:'إضافة طلب / خدمة إضافية', label_service_item:'عنصر الخدمة *',
        select_service_item:'اختر عنصر الخدمة',
        label_quantity_req:'الكمية *', label_unit_price:'سعر الوحدة *',
        label_notes:'ملاحظات', btn_add_order:'إضافة طلب',
        notes_placeholder:'أضف أي ملاحظات خاصة',
        modal_add_purchase:'إضافة مشترى',
        label_name_req:'الاسم', label_price_req:'السعر', label_quantity_opt:'الكمية',
        modal_guest_details:'تفاصيل الضيف', orders_services_label:'الطلبات والخدمات',
        no_orders:'لا توجد طلبات', total_spent_label:'إجمالي الإنفاق',
        modal_room_details:'تفاصيل الغرفة', modal_price_history:'سجل تغييرات الأسعار',
        col_changed_by:'تم التغيير بواسطة', col_old_price:'السعر القديم', col_new_price:'السعر الجديد',
        col_change_date:'تاريخ التغيير', col_reason:'السبب', no_price_changes:'لا توجد تغييرات في الأسعار',
        current_guest_label:'الضيف الحالي', btn_edit_room:'تعديل الغرفة',
        toast_room_saved:'تم حفظ الغرفة بنجاح!',
        toast_service_added:'تمت إضافة الخدمة إلى فاتورة الضيف!',
        toast_purchase_added:'تم إضافة المشترى بنجاح!',
        toast_purchase_deleted:'تم حذف المشترى.',
        toast_settings_saved:'تم حفظ الإعدادات بنجاح!',
        toast_fill_fields:'يرجى ملء جميع الحقول المطلوبة.',
        toast_invalid_date:'يجب أن يكون تاريخ الخروج بعد تاريخ الدخول',
        toast_room_unavailable:'الغرفة المختارة غير متاحة',
        toast_checkout_updated:'تم تحديث تاريخ الخروج! سيتم إعادة حساب الإجمالي.',
        toast_checkout_after:'يجب أن يكون تاريخ الخروج بعد تاريخ الدخول!',
        toast_no_guest:'لا يوجد ضيف نشط في هذه الغرفة.',
        toast_checkout_ok:'تم تسجيل الخروج بنجاح!',
        toast_checkin_ok:'تم تسجيل الدخول بنجاح!',
        price_placeholder:'٠',
        nav_cleaner:'حالة الغرف',
        login_subtitle:'نظام إدارة الفندق',
        label_email_addr:'البريد الإلكتروني', label_password:'كلمة المرور',
        enter_email:'أدخل بريدك الإلكتروني', enter_password:'أدخل كلمة المرور',
        btn_login:'تسجيل الدخول', login_error:'البريد الإلكتروني أو كلمة المرور غير صحيحة.',
        role_admin:'مدير', role_reception:'استقبال', role_cleaner:'عامل نظافة',
        cleaner_page_title:'حالة الغرف',
        cleaner_hint:'اختر غرفة وحدّث حالتها.',
        user_mgmt_title:'إدارة المستخدمين', btn_add_user:'إضافة مستخدم',
        label_user_name:'الاسم', label_user_email:'البريد الإلكتروني',
        label_user_password:'كلمة المرور', label_user_role:'الدور',
        cleaner_statuses_title:'خيارات حالة التنظيف',
        btn_add_cleaner_status:'إضافة حالة',
        toast_status_updated:'تم تحديث حالة الغرفة!',
        toast_cannot_delete_self:'لا يمكنك حذف حسابك الخاص.',
        access_denied:'غير مصرح بالدخول.',
        select_role:'اختر الدور',
        logout_confirm:'هل أنت متأكد من تسجيل الخروج؟',
        service_categories_title:'فئات الخدمات', btn_add_category:'إضافة فئة',
        label_service_category:'الفئة', label_item_name:'اسم العنصر',
        room_statuses_title:'حالات الغرف',
        room_statuses_hint:'خصص تسميات وألوان حالات الغرف. لا يمكن حذف الحالات الأساسية.',
        btn_add_status:'إضافة حالة',
        label_status_label:'التسمية', label_status_color:'اللون',
        label_bookable:'قابل للحجز', system_badge:'نظام',
        reserve_room:'حجز الغرفة', btn_reserve:'احجز',
        btn_group:'مجموعة', lbl_group:'مجموعة',
        confirm_group_checkin:'تسجيل دخول هذه الغرفة كمجموعة (بدون بيانات نزيل وبدون رسوم)؟',
        toast_group_checkin:'تم تسجيل دخول الغرفة كمجموعة.',
        btn_change_room:'تغيير الغرفة', modal_change_room:'تغيير الغرفة المحجوزة',
        label_select_new_room:'نقل الحجز إلى',
        toast_room_changed:'تم نقل الحجز إلى الغرفة الجديدة.',
        err_select_room:'يرجى اختيار غرفة.',
        err_no_other_rooms:'لا توجد غرف أخرى متاحة لنقل هذا الحجز إليها.',
        btn_add_deposit:'إضافة عربون', modal_add_deposit:'إضافة عربون',
        add_deposit_hint:'يُضاف هذا المبلغ إلى العربون المدفوع مسبقاً (مثلاً عربون إضافي لتمديد الإقامة).',
        lbl_deposit_so_far:'العربون المدفوع حتى الآن',
        err_enter_amount:'أدخل مبلغاً واحداً على الأقل.',
        toast_deposit_added:'تمت إضافة العربون بنجاح!',
        label_arrival_date:'تاريخ الوصول المتوقع',
        label_agreed_price:'السعر المتفق / ليلة',
        label_deposit:'العربون المدفوع (د.ع)',
        label_deposit_iqd:'العربون (د.ع)', label_deposit_usd:'العربون (دولار)',
        section_deposit:'العربون / الدفعة المقدمة',
        deposit_hint:'اختياري: سجل أي دفعة مقدمة مستلمة من الضيف.',
        lbl_deposit_paid:'العربون المدفوع',
        lbl_deposit:'العربون',
        payment_method_label:'طريقة الدفع',
        payment_methods_title:'طرق الدفع',
        btn_add_payment_method:'إضافة طريقة دفع',
        lbl_payment:'الدفع',
        toast_room_reserved:'تم حجز الغرفة بنجاح!',
        toast_reservation_cancelled:'تم إلغاء الحجز.',
        btn_checkin_now:'تسجيل الدخول الآن',
        cancel_reservation:'إلغاء الحجز',
        arrives:'يصل', reserved_for:'محجوزة لـ',
        change_status_label:'تغيير الحالة',
        back:'رجوع',
        checkout_note_label:'ملاحظة',
        checkout_note_placeholder:'أضف ملاحظة عن هذا الخروج (اختياري)...',
        lbl_balance_due:'المبلغ المتبقي', lbl_fully_paid:'مغطى بالكامل من العربون',
        lbl_cash:'نقدي', lbl_mastercard:'ماستركارد',
        checkout_payment_title:'دفعة تسجيل الخروج',
        checkout_payment_hint:'أدخل المبلغ الذي يتم استلامه من النزيل الآن.',
        err_checkout_payment_required:'يرجى إدخال المبلغ المستلم من النزيل (نقدي د.ع، نقدي دولار، أو ماستركارد د.ع).',
        err_checkout_payment_insufficient:'المبلغ المدخل أقل من المبلغ المتبقي. يرجى تحصيل المبلغ المتبقي بالكامل قبل تسجيل الخروج.',
        lbl_remaining:'المتبقي', lbl_change_due:'المبلغ المسترجع',
        lbl_fully_paid_now:'تم الدفع بالكامل — لا يوجد مبلغ متبقي',
        lbl_guest:'الضيف', lbl_room:'الغرفة', lbl_checkin:'تاريخ الدخول', lbl_checkout:'تاريخ الخروج',
        lbl_description:'الوصف', lbl_amount:'المبلغ',
        lbl_room_charges:'رسوم الغرفة', lbl_room_total:'إجمالي الغرفة',
        lbl_services_total:'إجمالي الخدمات', lbl_thank_you:'شكراً لإقامتكم معنا!',
        lbl_invoice:'فاتورة',
    }
};

function t(key) {
    return translations[currentLang]?.[key] ?? translations.en[key] ?? key;
}

function fmtIQD(n) {
    return Math.round(n).toLocaleString('en-US');
}

// Formats a Date as "YYYY-MM-DDTHH:MM" using LOCAL wall-clock time — unlike .toISOString()
// (which is always UTC), this matches what <input type="datetime-local"> expects/stores, and
// is what guest.checkIn/checkOut are kept as throughout the app. Mixing the two silently shifts
// times by the local UTC offset every time a value round-trips through .toISOString().
function toLocalDateTimeString(date) {
    const pad = n => String(n).padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function catName(cat) {
    if (!cat) return '';
    if (typeof cat === 'object') return currentLang === 'ar' ? (cat.ar || cat.en || '') : (cat.en || cat.ar || '');
    return cat; // legacy string
}

function catNameByKey(key) {
    if (!key) return '';
    const cats = hotelData.settings.serviceCategories || [];
    const found = cats.find(c => (typeof c === 'object' ? c.en : c) === key);
    return found ? catName(found) : key;
}

function fmtUSD(n) {
    return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Room + services combined, in the room's own currency — for a checked-out guest this is the real
// final bill (isEstimate: false); for a guest still staying, it's what they'd owe if they checked
// out right now (room rate × nights so far, plus any services already ordered), so History/Reports
// don't show a misleading "$0.00" for every currently-occupied guest just because they haven't
// checked out yet.
function computeGuestTotal(guest) {
    const svcTotal = (guest.orders || []).reduce((s, o) => s + (o.price || 0) * (o.quantity || 1), 0);
    const rate = hotelData.settings.exchangeRate || 1500;

    if (guest.roomAmountPaid != null) {
        const symbol = guest.roomCurrency || 'IQD';
        const svc = guest.serviceAmountIQD || 0;
        const amount = (guest.roomAmountPaid || 0) + (symbol === 'IQD' ? svc : svc / rate);
        return { amount, symbol, isEstimate: false };
    }

    if (!guest.checkIn) return { amount: 0, symbol: 'IQD', isEstimate: true };
    const checkInD  = new Date(guest.checkIn);
    const checkOutD = guest.checkOut ? new Date(guest.checkOut) : new Date();
    const nights    = Math.max(1, Math.ceil((checkOutD - checkInD) / 86400000));
    const isUSD      = guest.basePriceUSD > 0;
    const nightlyRate = isUSD ? (guest.basePriceUSD || 0) : (guest.basePriceIQD || guest.basePrice || 0);
    const roomTotal  = nightlyRate * nights;
    const amount = roomTotal + (isUSD ? svcTotal / rate : svcTotal);
    return { amount, symbol: isUSD ? '$' : 'IQD', isEstimate: true };
}

function toggleLanguage() {
    setLanguage(currentLang === 'en' ? 'ar' : 'en');
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.body.classList.toggle('arabic-font', lang === 'ar');
    const btn = document.getElementById('langToggle');
    if (btn) btn.textContent = lang === 'en' ? 'العربية' : 'English';
    translatePage();
    if (loggedInUser) {
        applyRoleUI();
        const visiblePage = [...document.querySelectorAll('.page-content')].find(p => p.style.display !== 'none');
        if (visiblePage) switchPage(visiblePage.id, document.querySelector('.sidebar-item.active'));
    }
}

function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
}

// ==================== STATUS SYSTEM ====================
// Adds any newly-introduced default statuses to data saved before they existed, and strips
// out statuses that have since been retired — without touching colors/labels the user
// already customized for statuses that are still active.
const RETIRED_STATUSES = ['vacated'];
// Finds any status entry that's really a duplicate of the canonical 'checkout' status —
// e.g. a custom one a user added by hand called "check out" — so it can be merged away.
function findCheckoutDupeIds(statuses) {
    return (Array.isArray(statuses) ? statuses : [])
        .filter(s => s.id !== 'checkout' && /^check\s*-?\s*out$/i.test((s.label || '').trim()))
        .map(s => s.id);
}
function ensureDefaultRoomStatuses(statuses) {
    const dupeIds = findCheckoutDupeIds(statuses);
    const list = (Array.isArray(statuses) ? [...statuses] : [])
        .filter(s => !RETIRED_STATUSES.includes(s.id) && !dupeIds.includes(s.id));
    const defaults = [
        { id: 'cleaning', label: 'Cleaning', color: '#3b82f6', bookable: false },
        { id: 'checkout', label: 'Checkout', color: '#dc2626', bookable: false },
    ];
    defaults.forEach(d => { if (!list.find(s => s.id === d.id)) list.push(d); });
    return list;
}

// Remaps room statuses that have been retired/merged. Takes the *raw* (pre-cleanup) statuses
// list so dupe ids can still be found — must be computed before ensureDefaultRoomStatuses() runs.
function migrateRoomStatuses(rooms, rawStatuses) {
    const dupeIds = findCheckoutDupeIds(rawStatuses);
    return (rooms || []).map(r => {
        if (r.status === 'vacated') return { ...r, status: 'cleaning' };
        if (dupeIds.includes(r.status)) return { ...r, status: 'checkout' };
        return r;
    });
}

function getStatusConfig(id) {
    const found = (hotelData.settings.roomStatuses || []).find(s => s.id === id);
    return found || { id, label: id, color: '#6b7280', bookable: false };
}

function getStatusLabel(id) {
    const cfg = getStatusConfig(id);
    return cfg.label || id;
}

function getCleanerStatuses() {
    return (hotelData.settings.roomStatuses || []).filter(s => !s.system);
}

const STATUS_ICONS = {
    available: 'fa-check-circle', cleaning: 'fa-broom', checkout: 'fa-door-open',
    unavailable: 'fa-ban', reserved: 'fa-bookmark', occupied: 'fa-user-circle'
};

function getStatusIcon(id) { return STATUS_ICONS[id] || 'fa-circle'; }

// ==================== DATA MANAGEMENT ====================
// Ensure XLSX is loaded
function ensureXLSX() {
    return new Promise((resolve) => {
        if (window.XLSX) {
            resolve();
        } else {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
            script.onload = () => resolve();
            script.onerror = () => {
                console.error('Failed to load XLSX library');
                resolve(); // Still resolve to continue
            };
            document.head.appendChild(script);
        }
    });
}

let hotelData = {
    rooms: [],
    guests: [],
    orders: [],
    priceHistory: [],
    settings: {
        hotelName: 'My Hotel',
        currency: 'USD',
        currencySymbol: '$',
        taxRate: 0,
        exchangeRate: 1500,
        checkoutCutoffHour: 13, // 1:00 PM — staying past this on the checkout date auto-adds another night
        paymentMethods: ['Cash', 'Card', 'Bank Transfer'],
        serviceCategories: [
            {en:'Food',ar:'طعام'},
            {en:'Drinks',ar:'مشروبات'},
            {en:'Hot Drinks',ar:'مشروبات ساخنة'},
            {en:'Laundry',ar:'غسيل'},
            {en:'Cleaning',ar:'تنظيف'},
            {en:'Other',ar:'أخرى'}
        ],
        roomTypes: ['Single', 'Double', 'Suite', 'Deluxe'],
        roomStatuses: [
            { id: 'available',   label: 'Available',   color: '#10b981', bookable: true  },
            { id: 'cleaning',    label: 'Cleaning',    color: '#3b82f6', bookable: false },
            { id: 'checkout',    label: 'Checkout',    color: '#dc2626', bookable: false },
            { id: 'unavailable', label: 'Unavailable', color: '#ef4444', bookable: false },
            { id: 'reserved',    label: 'Reserved',    color: '#f59e0b', bookable: false, system: true },
            { id: 'occupied',    label: 'Occupied',    color: '#6b7280', bookable: false, system: true },
        ]
    },
    activities: [],
    purchases: [],
    outsideIncome: [],
    shiftLog: [],
    reservationLog: [],
    incomeResets: [],
    outsideIncomeResets: [],
    purchasesResets: [],
    deletedRoomIds: [],
    deletedGuestIds: [],
    users: [
        { id: 1, name: 'Admin', email: 'admin@hotel.com', password: 'admin123', role: 'admin' }
    ]
};

let loggedInUser = null;

let selectedRoom = null;
let _historyPage = 1;
let _historyRecords = [];
let charts = {};
let isOnline = true;

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    loadDataFromStorage();
    updateCurrentDate();
    setupEventListeners();
    setInterval(updateCurrentDate, 1000);
    // Init language
    document.documentElement.dir  = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    document.body.classList.toggle('arabic-font', currentLang === 'ar');
    const langBtn = document.getElementById('langToggle');
    if (langBtn) langBtn.textContent = currentLang === 'en' ? 'العربية' : 'English';
    translatePage();

    if (window.innerWidth < 768) {
        document.getElementById('sidebar').classList.add('sidebar-collapsed');
    }

    // Firebase auth
    if (window.fbAuth) {
        setupOnlineWatcher();
        window.fbAuth.onAuthStateChanged(user => {
            if (user) {
                window.fbDb.ref('users/' + user.uid).once('value').then(snap => {
                    const profile = snap.val();
                    if (!profile) { window.fbAuth.signOut(); checkFirstRun(); return; }
                    loggedInUser = { uid: user.uid, ...profile };
                    sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
                    return window.fbDb.ref('hotelData').once('value').then(dataSnap => {
                        const fbData = dataSnap.val();
                        if (fbData) { hotelData = fbMerge(fbData); localStorage.setItem('hotelData', JSON.stringify(hotelData)); }
                        // A restored session (tab left open, tablet just woke up, etc.) never goes
                        // through the login form, so roll the shift over here if the open one is
                        // clearly stale — see ensureFreshShiftSession().
                        if (loggedInUser.role === 'reception' || loggedInUser.role === 'admin') ensureFreshShiftSession();
                        showApp();
                        setupFirebaseRealtimeListener();
                    });
                }).catch(() => {
                    showLogin();
                });
            } else {
                checkFirstRun();
            }
        });
    } else {
        checkAuth();
    }
});

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // Check In Form
    document.getElementById('checkInForm')?.addEventListener('submit', handleCheckIn);
    document.getElementById('basePriceIQD')?.addEventListener('input', () => lockOtherPriceField('basePriceIQD', 'basePriceUSD'));
    document.getElementById('basePriceUSD')?.addEventListener('input', () => lockOtherPriceField('basePriceUSD', 'basePriceIQD'));
    document.getElementById('roomSelect')?.addEventListener('change', handleRoomSelection);

    // Room Form
    document.getElementById('roomForm')?.addEventListener('submit', handleRoomSubmit);

    // Order Form
    document.getElementById('orderForm')?.addEventListener('submit', handleOrderSubmit);

    // Purchase Form
    document.getElementById('purchaseForm')?.addEventListener('submit', handlePurchaseSubmit);
    document.getElementById('outsideIncomeForm')?.addEventListener('submit', handleOutsideIncomeSubmit);
}

// ==================== MODAL FUNCTIONS ====================
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// ==================== NAVIGATION ====================
function switchPage(pageId, clickedEl) {
    // Role guard
    if (loggedInUser && PAGE_ACCESS[pageId] && !PAGE_ACCESS[pageId].includes(loggedInUser.role)) {
        showToast(t('access_denied'), 'error');
        return;
    }

    // Hide all pages
    document.querySelectorAll('.page-content').forEach(page => {
        page.style.display = 'none';
    });

    // Show selected page
    document.getElementById(pageId).style.display = 'block';

    // Update sidebar active state
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    const sidebarItem = clickedEl ? clickedEl.closest('.sidebar-item') : null;
    if (sidebarItem) sidebarItem.classList.add('active');

    // Update page title
    const titles = {
        'dashboard': t('nav_dashboard'), 'rooms': t('nav_rooms'),
        'checkIn': t('nav_checkin'), 'checkOut': t('nav_checkout'),
        'history': t('nav_history'), 'reports': t('nav_reports'),
        'purchases': t('nav_purchases'), 'outsideIncome': t('nav_outside_income'), 'services': t('nav_services'),
        'settings': t('nav_settings'), 'cleanerStatus': t('cleaner_page_title')
    };
    document.getElementById('pageTitle').textContent = titles[pageId] || t('nav_dashboard');

    // Load page specific data
    if (pageId === 'dashboard') loadDashboard();
    if (pageId === 'rooms') loadRoomsPage();
    if (pageId === 'checkIn') loadCheckInPage();
    if (pageId === 'checkOut') loadCheckOutPage();
    if (pageId === 'history') loadHistoryPage();
    if (pageId === 'reports') loadReportsPage();
    if (pageId === 'purchases') loadPurchasesPage();
    if (pageId === 'outsideIncome') loadOutsideIncomePage();
    if (pageId === 'services') loadServicesPage();
    if (pageId === 'settings') loadSettingsPage();
    if (pageId === 'cleanerStatus') loadCleanerPage();

    // Close sidebar on phones only (tablet keeps it visible)
    if (window.innerWidth < 768) closeSidebar();
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (window.innerWidth < 768) {
        // Mobile: toggle 'open' class (sidebar hidden by CSS default)
        const opening = !sidebar.classList.contains('open');
        sidebar.classList.toggle('open');
        overlay?.classList.toggle('active', opening);
    } else {
        // Desktop: toggle 'sidebar-collapsed' class
        sidebar.classList.toggle('sidebar-collapsed');
    }
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('open');   // mobile
    document.getElementById('sidebarOverlay')?.classList.remove('active');
}

// ==================== FILTER UTILITIES ====================
function applyRoomFilters(rooms, { status, floor, type, minPrice, maxPrice } = {}) {
    return rooms.filter(room => {
        if (status && status !== 'all' && room.status !== status) return false;
        if (floor && floor !== 'all' && String(room.floor) !== String(floor)) return false;
        if (type && type !== 'all' && room.type.toLowerCase() !== type.toLowerCase()) return false;
        if (minPrice !== '' && minPrice != null && !isNaN(minPrice) && room.price < parseFloat(minPrice)) return false;
        if (maxPrice !== '' && maxPrice != null && !isNaN(maxPrice) && room.price > parseFloat(maxPrice)) return false;
        return true;
    });
}

function populateFilterSelects(floorElId, typeElId) {
    const floors = [...new Set(hotelData.rooms.map(r => r.floor))].sort((a, b) => a - b);
    const floorEl = document.getElementById(floorElId);
    if (floorEl) {
        const cur = floorEl.value;
        floorEl.innerHTML = `<option value="all">${t('all_floors')}</option>` +
            floors.map(f => `<option value="${f}">${t('floor_prefix')} ${f}</option>`).join('');
        if (cur) floorEl.value = cur;
    }
    const types = hotelData.settings.roomTypes || ['Single', 'Double', 'Suite', 'Deluxe'];
    const typeEl = document.getElementById(typeElId);
    if (typeEl) {
        const cur = typeEl.value;
        typeEl.innerHTML = `<option value="all">${t('all_types')}</option>` +
            types.map(tp => `<option value="${tp}">${tp}</option>`).join('');
        if (cur) typeEl.value = cur;
    }
}

// ==================== ROOM MANAGEMENT ====================
let _editingRoomId = null;

function openRoomModal(roomId = null) {
    _editingRoomId = roomId || null;
    // Populate room type dropdown from settings
    const roomTypeSelect = document.getElementById('roomType');
    roomTypeSelect.innerHTML = '<option value="">Select room type</option>';
    (hotelData.settings.roomTypes || ['Single', 'Double', 'Suite', 'Deluxe']).forEach(type => {
        const opt = document.createElement('option');
        opt.value = type;
        opt.textContent = type;
        roomTypeSelect.appendChild(opt);
    });

    if (roomId) {
        const room = hotelData.rooms.find(r => r.id === roomId);
        document.getElementById('roomNumber').value = room.number;
        // Match case-insensitively for backwards compatibility
        const matchedOpt = Array.from(roomTypeSelect.options)
            .find(o => o.value.toLowerCase() === (room.type || '').toLowerCase());
        roomTypeSelect.value = matchedOpt ? matchedOpt.value : room.type;
        document.getElementById('roomPrice').value = Math.round(room.price).toLocaleString('en-US');
        document.getElementById('roomCapacity').value = room.capacity;
        document.getElementById('roomFloor').value = room.floor;
        document.getElementById('roomDescription').value = room.description;
    } else {
        document.getElementById('roomForm').reset();
        // Re-populate after reset clears the select
        roomTypeSelect.innerHTML = '<option value="">Select room type</option>';
        (hotelData.settings.roomTypes || ['Single', 'Double', 'Suite', 'Deluxe']).forEach(type => {
            const opt = document.createElement('option');
            opt.value = type;
            opt.textContent = type;
            roomTypeSelect.appendChild(opt);
        });
    }
    openModal('roomModal');
}

function handleRoomSubmit(e) {
    e.preventDefault();
    if (!requireOnline()) return;
    const roomNumber = document.getElementById('roomNumber').value;
    const roomType = document.getElementById('roomType').value;
    const roomPrice = parseFloat((document.getElementById('roomPrice').value || '').replace(/,/g, ''));
    const capacity = parseInt(document.getElementById('roomCapacity').value);
    const floor = parseInt(document.getElementById('roomFloor').value);
    const description = document.getElementById('roomDescription').value;

    let room = _editingRoomId != null ? hotelData.rooms.find(r => r.id === _editingRoomId) : null;

    if (room) {
        room.number      = parseInt(roomNumber);
        room.type        = roomType;
        room.price       = roomPrice;
        room.capacity    = capacity;
        room.floor       = floor;
        room.description = description;
    } else {
        room = {
            id: Date.now(),
            number: parseInt(roomNumber),
            type: roomType,
            price: roomPrice,
            capacity: capacity,
            floor: floor,
            status: 'available',
            currentGuest: null,
            description: description
        };
        hotelData.rooms.push(room);
    }
    _editingRoomId = null;

    saveDataToStorage();
    closeModal('roomModal');
    showToast(t('toast_room_saved'), 'success');
    loadRoomsPage();
}

// Generates rooms <floor><01..N> across a floor range in one go (e.g. floors 2-9, 6 rooms/floor
// -> 201-206, 301-306, ... 901-906), so an admin doesn't have to add each room one at a time.
// Existing room numbers are left untouched and skipped.
function bulkGenerateRooms() {
    if (!requireOnline()) return;
    const floorStart = parseInt(document.getElementById('bulkRoomFloorStart')?.value);
    const floorEnd   = parseInt(document.getElementById('bulkRoomFloorEnd')?.value);
    const perFloor   = parseInt(document.getElementById('bulkRoomsPerFloor')?.value);
    const type       = document.getElementById('bulkRoomType')?.value;
    const price      = parseFloat((document.getElementById('bulkRoomPrice')?.value || '').replace(/,/g, ''));
    const capacity   = parseInt(document.getElementById('bulkRoomCapacity')?.value);

    if (!Number.isFinite(floorStart) || !Number.isFinite(floorEnd) || floorStart > floorEnd) {
        showToast('Enter a valid floor range.', 'error');
        return;
    }
    if (!Number.isFinite(perFloor) || perFloor < 1) {
        showToast('Enter how many rooms per floor.', 'error');
        return;
    }
    if (!type) {
        showToast('Select a room type.', 'error');
        return;
    }
    if (!Number.isFinite(price) || price < 0) {
        showToast('Enter a valid price.', 'error');
        return;
    }

    const existingNumbers = new Set(hotelData.rooms.map(r => r.number));
    let added = 0, skipped = 0, nextId = Date.now();
    for (let floor = floorStart; floor <= floorEnd; floor++) {
        for (let seq = 1; seq <= perFloor; seq++) {
            const number = floor * 100 + seq;
            if (existingNumbers.has(number)) { skipped++; continue; }
            hotelData.rooms.push({
                id: nextId++,
                number,
                type,
                price,
                capacity: Number.isFinite(capacity) && capacity > 0 ? capacity : 2,
                floor,
                status: 'available',
                currentGuest: null,
                description: ''
            });
            existingNumbers.add(number);
            added++;
        }
    }

    saveDataToStorage();
    loadRoomsPage();
    showToast(`${added} room(s) added${skipped ? `, ${skipped} skipped (already existed)` : ''}.`, added ? 'success' : 'error');
}

function loadRoomsPage() {
    populateFilterSelects('rmFilterFloor', 'rmFilterType');
    filterRoomsAdvanced();
}

function filterRoomsAdvanced() {
    const status   = document.getElementById('rmFilterStatus')?.value || 'all';
    const floor    = document.getElementById('rmFilterFloor')?.value  || 'all';
    const type     = document.getElementById('rmFilterType')?.value   || 'all';
    const minPrice = document.getElementById('rmFilterMinPrice')?.value ?? '';
    const maxPrice = document.getElementById('rmFilterMaxPrice')?.value ?? '';
    displayRooms(applyRoomFilters(hotelData.rooms, { status, floor, type, minPrice, maxPrice }));
}

function resetRoomFilters() {
    ['rmFilterStatus','rmFilterFloor','rmFilterType'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = 'all';
    });
    ['rmFilterMinPrice','rmFilterMaxPrice'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    displayRooms(hotelData.rooms);
}

function displayRooms(rooms) {
    const grid = document.getElementById('roomsGrid');
    grid.innerHTML = '';

    rooms.forEach(room => {
        const cfg = getStatusConfig(room.status);
        const card = document.createElement('div');
        card.className = 'room-card bg-white rounded-lg p-6 cursor-pointer hover:shadow-lg transition-all';
        card.style.cssText = `border-left:4px solid ${cfg.color};`;
        const statusLabel = cfg.label;
        card.innerHTML = `
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h3 class="text-2xl font-bold text-gray-800">${t('room_prefix')} ${room.number}</h3>
                    <p class="text-gray-600 text-sm">${room.type} - ${t('floor_prefix')} ${room.floor}</p>
                </div>
                <div class="flex items-center gap-2">
                    <span class="badge" style="background:${cfg.color}20;color:${cfg.color};">
                        <i class="fas fa-circle text-xs mr-1"></i>${statusLabel}
                    </span>
                    <button onclick="deleteRoom(${room.id});event.stopPropagation();" style="background:none;border:none;cursor:pointer;color:#ef4444;padding:2px 4px;border-radius:4px;" title="Delete Room">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
            <div class="mb-4">
                <p class="text-2xl font-bold text-green-600">$${room.price}</p>
                <p class="text-xs text-gray-500">${t('per_night')}</p>
            </div>
            <div class="mb-4 text-sm">
                <p class="text-gray-600">${t('capacity_label')}: <span class="font-semibold">${room.capacity} ${t('guests_label')}</span></p>
                ${room.currentGuest ? `<p class="text-gray-600">${t('guest_label')}: <span class="font-semibold">${room.currentGuest.name}</span></p>` : ''}
            </div>
            <div class="flex gap-2">
                <button onclick="openRoomModal(${room.id})" class="btn btn-secondary btn-sm flex-1 text-sm">
                    <i class="fas fa-edit"></i> ${t('edit')}
                </button>
                <button onclick="viewRoomDetails(${room.id})" class="btn btn-primary btn-sm flex-1 text-sm">
                    <i class="fas fa-info-circle"></i> ${t('details')}
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}


function deleteRoom(roomId) {
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room) return;
    if (room.status === 'occupied') {
        showToast('Cannot delete an occupied room. Check out the guest first.', 'error');
        return;
    }
    if (!confirm(`Delete Room ${room.number}? This cannot be undone.`)) return;
    hotelData.rooms = hotelData.rooms.filter(r => r.id !== roomId);
    recordTombstone('deletedRoomIds', roomId);
    saveDataToStorage();
    showToast(`Room ${room.number} deleted.`, 'success');
    loadRoomsPage();
}

// ==================== CHECK IN ====================
function loadCheckInPage() {
    populateFilterSelects('ciFilterFloor', 'ciFilterType');
    startCheckInClock();
    displayCheckInRooms(hotelData.rooms);
}

let _checkInClockTimer = null;
function startCheckInClock() {
    const ciEl = document.getElementById('checkInDateTime');
    const coEl = document.getElementById('checkOutDateTime');
    if (!ciEl) return;
    // ciEl is editable — user can change check-in date/time
    ciEl.readOnly = false;
    ciEl.style.cssText = '';

    function tick() {
        if (document.getElementById('checkInModal').classList.contains('active') === false) {
            clearInterval(_checkInClockTimer);
            _checkInClockTimer = null;
            return;
        }
        const now = new Date();
        now.setSeconds(0, 0);
        if (!ciEl.dataset.userChanged) {
            const pad = n => String(n).padStart(2, '0');
            ciEl.value = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
        }
        recalcCheckout();
    }

    tick(); // set immediately
    if (_checkInClockTimer) clearInterval(_checkInClockTimer);
    _checkInClockTimer = setInterval(tick, 60000); // update every minute
}

// Mark fields as user-changed when manually edited
document.addEventListener('DOMContentLoaded', function() {
    const ciEl = document.getElementById('checkInDateTime');
    const coEl = document.getElementById('checkOutDateTime');
    if (ciEl) ciEl.addEventListener('change', () => { ciEl.dataset.userChanged = '1'; recalcCheckout(); });
});

function filterCheckInRooms() {
    const floor    = document.getElementById('ciFilterFloor')?.value    || 'all';
    const type     = document.getElementById('ciFilterType')?.value     || 'all';
    const maxPrice = document.getElementById('ciFilterMaxPrice')?.value ?? '';
    displayCheckInRooms(applyRoomFilters(hotelData.rooms, { floor, type, maxPrice }));
}

function resetCheckInFilters() {
    ['ciFilterFloor', 'ciFilterType'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = 'all';
    });
    const mp = document.getElementById('ciFilterMaxPrice');
    if (mp) mp.value = '';
    displayCheckInRooms(hotelData.rooms);
}

function displayCheckInRooms(rooms) {
    const grid = document.getElementById('checkInRoomsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    rooms.forEach(room => {
        const cfg = getStatusConfig(room.status);
        const isAvailable = cfg.bookable;
        // Based on reservationInfo, not status — so a temp-checked-out room still shows its
        // pending reservation even while sitting in "Checkout" (needs cleaning) for the cleaner.
        const isReserved = !!room.reservationInfo;

        const isOccupied = room.status === 'occupied' && room.currentGuest;
        const isClickable = isAvailable || isOccupied || isReserved;

        const card = document.createElement('div');
        card.className = `room-card rounded-lg p-6 transition-all ${isClickable ? 'cursor-pointer hover:shadow-lg' : 'opacity-60 cursor-not-allowed'}`;
        card.style.cssText = `border-left:4px solid ${cfg.color};background:${isClickable ? '#ffffff' : cfg.color + '10'};`;

        if (isAvailable) {
            card.onclick = () => openCheckInModal(room.id);
        } else if (isOccupied) {
            card.onclick = () => openRoomServiceModal(room.id);
        }

        let reserveBlock = '';
        if (isReserved && room.reservationInfo) {
            const ri = room.reservationInfo;
            const arrDate = ri.arrivalDate ? new Date(ri.arrivalDate).toLocaleDateString() : '—';
            reserveBlock = `
                <div style="margin-top:8px;padding:8px 10px;background:${cfg.color}15;border-radius:8px;font-size:0.78rem;color:#374151;">
                    <b>${t('reserved_for')}:</b> ${ri.guestName} &nbsp;·&nbsp; <b>${t('arrives')}:</b> ${arrDate}${(()=>{const parts=[];const iqd=ri.depositIQD||(ri.deposit||0);const usd=ri.depositUSD||0;if(iqd>0)parts.push(`IQD ${fmtIQD(iqd)}`);if(usd>0)parts.push(`$${usd.toFixed(2)}`);return parts.length?` &nbsp;·&nbsp; <b>${t('lbl_deposit')}:</b> ${parts.join(' + ')}`:'';})()}
                    <div style="display:flex;gap:6px;margin-top:6px;">
                        <button onclick="openCheckInFromReservation(${room.id});event.stopPropagation();"
                            style="flex:1;padding:5px 8px;background:${cfg.color};color:white;border:none;border-radius:6px;font-size:0.75rem;font-weight:700;cursor:pointer;">
                            <i class="fas fa-sign-in-alt"></i> ${t('btn_checkin_now')}
                        </button>
                        <button onclick="openTempCheckIn(${room.id});event.stopPropagation();"
                            style="flex:1;padding:5px 8px;background:#f59e0b;color:white;border:none;border-radius:6px;font-size:0.75rem;font-weight:700;cursor:pointer;">
                            <i class="fas fa-clock"></i> Temp
                        </button>
                        <button onclick="openChangeRoomModal(${room.id});event.stopPropagation();"
                            style="padding:5px 10px;background:#ede9fe;color:#7c3aed;border:none;border-radius:6px;font-size:0.75rem;font-weight:700;cursor:pointer;" title="${t('btn_change_room')||'Change Room'}">
                            <i class="fas fa-exchange-alt"></i>
                        </button>
                        <button onclick="cancelReservation(${room.id});event.stopPropagation();"
                            style="padding:5px 10px;background:#fee2e2;color:#dc2626;border:none;border-radius:6px;font-size:0.75rem;font-weight:700;cursor:pointer;">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>`;
        }

        card.innerHTML = `
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h3 class="text-2xl font-bold text-gray-800">${t('room_prefix')} ${room.number}</h3>
                    <p class="text-gray-600 text-sm">${room.type} — ${t('floor_prefix')} ${room.floor}</p>
                </div>
                <span class="badge" style="background:${cfg.color}20;color:${cfg.color};">
                    <i class="fas fa-circle text-xs mr-1"></i>${cfg.label}
                </span>
            </div>
            <div class="mb-3">
                <p class="text-2xl font-bold text-green-600">$${room.price}</p>
                <p class="text-xs text-gray-500">${t('per_night')}</p>
            </div>
            <div class="text-sm mb-4">
                <p class="text-gray-600">${t('capacity_label')}: <span class="font-semibold">${room.capacity} ${t('guests_label')}</span></p>
                ${room.currentGuest ? `<p class="text-gray-600">${t('guest_label')}: <span class="font-semibold">${room.currentGuest.name}</span></p>` : ''}
            </div>
            ${reserveBlock}
            ${isAvailable && !isReserved
                ? `<div style="display:flex;gap:5px;margin-top:8px;">
                       <button style="flex:1;padding:5px 8px;font-size:0.75rem;font-weight:600;background:#16a34a;color:white;border:none;border-radius:7px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:4px;" onclick="openCheckInModal(${room.id});event.stopPropagation();">
                           <i class="fas fa-sign-in-alt"></i> ${t('btn_checkin_guest') || 'Check In'}
                       </button>
                       <button style="flex:1;padding:5px 8px;font-size:0.75rem;font-weight:600;background:#ede9fe;color:#7c3aed;border:none;border-radius:7px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:4px;" onclick="openReserveModal(${room.id});event.stopPropagation();">
                           <i class="fas fa-bookmark"></i> ${t('btn_reserve') || 'Reserve'}
                       </button>
                       <button style="flex:1;padding:5px 8px;font-size:0.75rem;font-weight:600;background:#fef3c7;color:#b45309;border:none;border-radius:7px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:4px;" onclick="groupCheckIn(${room.id});event.stopPropagation();">
                           <i class="fas fa-users"></i> ${t('btn_group') || 'Group'}
                       </button>
                   </div>`
                : isOccupied
                    ? `<div style="display:flex;gap:5px;margin-top:8px;">
                           <button style="flex:1;padding:5px 8px;font-size:0.75rem;font-weight:600;background:#3b82f6;color:white;border:none;border-radius:7px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:4px;" onclick="openRoomServiceModal(${room.id});event.stopPropagation();">
                               <i class="fas fa-plus"></i> ${t('btn_add_service') || 'Add Service'}
                           </button>
                           <button style="padding:5px 10px;background:#d1fae5;color:#059669;border:none;border-radius:7px;cursor:pointer;" onclick="openAddDepositModal(${room.id});event.stopPropagation();" title="${t('btn_add_deposit')||'Add Deposit'}">
                               <i class="fas fa-hand-holding-usd"></i>
                           </button>
                           <button style="padding:5px 10px;background:#ede9fe;color:#7c3aed;border:none;border-radius:7px;cursor:pointer;" onclick="openChangeRoomModal(${room.id});event.stopPropagation();" title="${t('btn_change_room')||'Change Room'}">
                               <i class="fas fa-exchange-alt"></i>
                           </button>
                       </div>`
                    : (!isReserved ? `<p class="text-xs text-gray-400 text-center mt-2">${cfg.label}</p>` : '')
            }
        `;
        grid.appendChild(card);
    });
}

let _lastCheckedInRoomId = null;
let _checkoutBalanceIQD = 0;
let _checkoutRate = 1500;
// Tracks the currently-open Shift Report modal's parameters, if any, so it can be silently
// re-rendered in place whenever hotelData changes (e.g. an admin correction elsewhere) — otherwise
// the itemized rows inside an already-open report stay frozen at whatever they were when it was
// first opened, even though every other page picks up the correction immediately.
let _openShiftReportArgs = null;
// Tracks which room's checkout form is currently rendered, so actions taken elsewhere (like adding
// a mid-stay deposit) can refresh it in place instead of leaving stale deposit/balance figures on screen.
let _currentCheckoutRoomId = null;

// Live-updates the "Remaining" line under the checkout payment fields as the user types,
// so the receptionist doesn't have to use an outside calculator to figure out what's left.
function updateCheckoutRemaining() {
    const el = document.getElementById('checkoutRemainingBalance');
    if (!el) return;
    const cashIQD = parseFloat((document.getElementById('checkoutCashIQD')?.value || '0').replace(/,/g, '')) || 0;
    const cashUSD = parseFloat(document.getElementById('checkoutCashUSD')?.value || '0') || 0;
    const cardIQD = parseFloat((document.getElementById('checkoutCardIQD')?.value || '0').replace(/,/g, '')) || 0;
    const paidIQDEquivalent = cashIQD + cardIQD + (cashUSD * _checkoutRate);
    const remaining = _checkoutBalanceIQD - paidIQDEquivalent;

    if (remaining > 0.5) {
        el.style.background = '#fef2f2'; el.style.color = '#b91c1c';
        el.innerHTML = `<i class="fas fa-exclamation-circle mr-1"></i>${t('lbl_remaining') || 'Remaining'}: IQD ${fmtIQD(remaining)} <span style="opacity:0.75;">(&asymp; $${fmtUSD(remaining / _checkoutRate)})</span>`;
    } else if (remaining < -0.5) {
        el.style.background = '#f0fdf4'; el.style.color = '#15803d';
        el.innerHTML = `<i class="fas fa-coins mr-1"></i>${t('lbl_change_due') || 'Change due'}: IQD ${fmtIQD(-remaining)} <span style="opacity:0.75;">(&asymp; $${fmtUSD(-remaining / _checkoutRate)})</span>`;
    } else {
        el.style.background = '#f0fdf4'; el.style.color = '#15803d';
        el.innerHTML = `<i class="fas fa-check-circle mr-1"></i>${t('lbl_fully_paid_now') || 'Fully paid — no balance remaining'}`;
    }
}

function openTempCheckIn(roomId) {
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room || !room.reservationInfo) return;
    openCheckInModal(roomId, true);
}

function openCheckInModal(roomId, isTemp = false) {
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room) return;
    document.getElementById('checkInModalForm').style.display = '';
    document.getElementById('checkInModalSuccess').style.display = 'none';
    document.getElementById('checkInForm').reset();
    resetPriceFields();
    populateRoomSelectDropdown();
    document.getElementById('roomSelect').value = room.id;
    handleRoomSelection();
    document.getElementById('basePriceUSD').value = room.price;
    document.getElementById('basePriceIQD').value = '';
    lockOtherPriceField('basePriceUSD', 'basePriceIQD');

    // Hide the room selector — room was chosen by clicking the card
    document.getElementById('roomSelectSection').style.display = 'none';
    const banner = document.getElementById('roomSelectedBanner');
    banner.style.display = '';
    document.getElementById('roomBannerTitle').textContent =
        `${t('room_prefix')} ${room.number} — ${room.type}`;
    document.getElementById('roomBannerSub').textContent =
        `${t('floor_prefix')} ${room.floor}  ·  $${room.price} / ${t('per_night')}`;

    // Temp occupancy on a reserved room
    const tempWarning = document.getElementById('tempCheckInWarning');
    if (isTemp && room.reservationInfo) {
        const ri = room.reservationInfo;
        const arrivalStr = ri.arrivalDate ? new Date(ri.arrivalDate).toLocaleString() : '—';
        if (tempWarning) {
            tempWarning.style.display = '';
            tempWarning.innerHTML = `
                <i class="fas fa-exclamation-triangle" style="color:#d97706;margin-right:6px;"></i>
                <span><strong>Temporary occupancy</strong> — reserved for <strong>${ri.guestName}</strong>.<br>
                Guest <strong>must check out by ${arrivalStr}</strong>.</span>`;
        }
        // Lock checkout to arrival date — calculate max nights and constrain nights input
        if (ri.arrivalDate) {
            const now = new Date();
            now.setSeconds(0, 0);
            const arrivalDate = new Date(ri.arrivalDate);
            const maxNights = Math.max(1, Math.ceil((arrivalDate - now) / (1000 * 60 * 60 * 24)));
            const nightsEl = document.getElementById('nightsInput');
            if (nightsEl) {
                nightsEl.max = maxNights;
                nightsEl.value = Math.min(parseInt(nightsEl.value) || 1, maxNights);
            }
            const checkOutDisplay = document.getElementById('checkOutDisplay');
            if (checkOutDisplay) {
                checkOutDisplay.style.borderColor = '#f59e0b';
                checkOutDisplay.style.background = '#fef3c7';
            }
        }
        // Store temp flag on the form so handleCheckIn can read it
        document.getElementById('checkInForm').dataset.tempRoomId = roomId;
    } else {
        if (tempWarning) tempWarning.style.display = 'none';
        document.getElementById('checkInForm').dataset.tempRoomId = '';
        const nightsEl = document.getElementById('nightsInput');
        if (nightsEl) nightsEl.max = '';
        const checkOutDisplay = document.getElementById('checkOutDisplay');
        if (checkOutDisplay) { checkOutDisplay.style.borderColor = ''; checkOutDisplay.style.background = ''; }
    }

    // Auto-fill current date/time
    const now = new Date();
    now.setSeconds(0, 0);
    const pad = n => String(n).padStart(2, '0');
    const localNow = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
    const dtEl = document.getElementById('checkInDateTime');
    if (dtEl) { dtEl.value = localNow; }
    recalcCheckout();

    startCheckInClock();
    openModal('checkInModal');
}

function changeRoomSelection() {
    document.getElementById('roomSelectSection').style.display = '';
    document.getElementById('roomSelectedBanner').style.display = 'none';
    document.getElementById('checkInForm').dataset.tempRoomId = '';
    resetPriceFields();
    document.getElementById('basePriceIQD').value = '';
    document.getElementById('basePriceUSD').value = '';
}

function resetCheckInForm() {
    document.getElementById('checkInForm').reset();
    resetPriceFields();
    document.getElementById('basePriceIQD').value = '';
    document.getElementById('basePriceUSD').value = '';
    document.getElementById('checkInForm').dataset.tempRoomId = '';
    ['checkInDepositCashIQD', 'checkInDepositCardIQD'].forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.value = ''; el.disabled = false; el.style.opacity = '1'; el.style.cursor = ''; }
    });
    const cashUSD = document.getElementById('checkInDepositCashUSD');
    if (cashUSD) { cashUSD.value = ''; cashUSD.disabled = false; cashUSD.style.opacity = '1'; cashUSD.style.cursor = ''; }
    // Re-fill current date/time
    const now = new Date();
    now.setSeconds(0, 0);
    const pad = n => String(n).padStart(2, '0');
    const localNow = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
    const dtEl = document.getElementById('checkInDateTime');
    if (dtEl) dtEl.value = localNow;
    recalcCheckout();
}

function openServiceAfterCheckIn() {
    const room = hotelData.rooms.find(r => r.id === _lastCheckedInRoomId);
    if (!room || !room.currentGuest) return;
    closeModal('checkInModal');
    selectedRoom = room;
    _populateOrderModal();
    openModal('orderModal');
}

function populateRoomSelectDropdown() {
    const bookableRooms = hotelData.rooms.filter(r => {
        const cfg = getStatusConfig(r.status);
        return cfg.bookable || r.status === 'reserved';
    });
    const select = document.getElementById('roomSelect');
    select.innerHTML = '<option value="">Select a room</option>';

    bookableRooms.forEach(room => {
        const option = document.createElement('option');
        option.value = room.id;
        const tag = room.status === 'reserved' ? ' [Reserved]' : '';
        option.textContent = `Room ${room.number} (${room.type}) - $${room.price}/night${tag}`;
        select.appendChild(option);
    });
}

function lockDepositField(activeId, otherId) {
    // Both fields always stay open
}

function lockOtherPriceField(activeId, otherId) {
    const hintEl = document.getElementById('checkInCurrencyHint');
    if (hintEl) hintEl.textContent = '';
    calculateTotalPrice();
}

function resetPriceFields() {
    ['basePriceIQD', 'basePriceUSD'].forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.disabled = false; el.style.opacity = '1'; el.style.cursor = ''; }
    });
}

function handleRoomSelection() {
    const roomId = parseInt(document.getElementById('roomSelect').value);
    const room = hotelData.rooms.find(r => r.id === roomId);

    if (room) {
        resetPriceFields();
        document.getElementById('roomTypeDisplay').value = room.type;
        document.getElementById('basePriceUSD').value = room.price;
        document.getElementById('basePriceIQD').value = '';
        lockOtherPriceField('basePriceUSD', 'basePriceIQD');
    }
}

function recalcCheckout() {
    const ciEl = document.getElementById('checkInDateTime');
    const nightsEl = document.getElementById('nightsInput');
    const checkOutHidden = document.getElementById('checkOutDateTime');
    const checkOutDisplay = document.getElementById('checkOutDisplay');
    const nightsCountEl = document.getElementById('nightsCount');

    const nights = Math.max(1, parseInt(nightsEl?.value) || 1);
    if (nightsCountEl) nightsCountEl.textContent = nights;

    if (!ciEl?.value) {
        if (checkOutDisplay) checkOutDisplay.textContent = '—';
        if (checkOutHidden) checkOutHidden.value = '';
        calculateTotalPrice();
        return;
    }

    const checkIn = new Date(ciEl.value);
    const checkOut = new Date(checkIn);
    checkOut.setDate(checkOut.getDate() + nights);

    if (checkOutHidden) checkOutHidden.value = toLocalDateTimeString(checkOut);
    if (checkOutDisplay) {
        checkOutDisplay.textContent = checkOut.toLocaleString([], {
            weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
    }
    calculateTotalPrice();
}

function calculateNights() { recalcCheckout(); }

function calculateTotalPrice() {
    const priceIQD = parseFloat((document.getElementById('basePriceIQD').value || '').replace(/,/g, '')) || 0;
    const priceUSD = parseFloat(document.getElementById('basePriceUSD').value) || 0;
    const nights = parseInt(document.getElementById('nightsCount').textContent) || 0;

    const price = priceIQD || priceUSD;
    const isIQD = priceIQD > 0 || (!priceUSD && hotelData.settings.currencySymbol === 'IQD');

    document.getElementById('finalNightPrice').textContent  = isIQD ? `IQD ${fmtIQD(price)}`          : `$ ${price.toFixed(2)}`;
    document.getElementById('totalStayPrice').textContent   = isIQD ? `IQD ${fmtIQD(price * Math.max(nights, 1))}` : `$ ${(price * Math.max(nights, 1)).toFixed(2)}`;
}

function handleCheckIn(e) {
    e.preventDefault();
    if (!requireOnline()) return;
    const roomId = parseInt(document.getElementById('roomSelect').value);
    const room = hotelData.rooms.find(r => r.id === roomId);

    const roomCfg = getStatusConfig(room.status);
    if (!room || (!roomCfg.bookable && room.status !== 'reserved')) {
        showToast(t('toast_room_unavailable'), 'error');
        return;
    }

    const priceIQD = parseFloat((document.getElementById('basePriceIQD').value || '').replace(/,/g, '')) || 0;
    const priceUSD = parseFloat(document.getElementById('basePriceUSD').value) || 0;
    const depositCashIQD = parseFloat((document.getElementById('checkInDepositCashIQD')?.value || '').replace(/,/g, '')) || 0;
    const depositCashUSD = parseFloat(document.getElementById('checkInDepositCashUSD')?.value) || 0;
    const depositCardIQD = parseFloat((document.getElementById('checkInDepositCardIQD')?.value || '').replace(/,/g, '')) || 0;
    const depositCardUSD = parseFloat(document.getElementById('checkInDepositCardUSD')?.value) || 0;
    const depositIQD = depositCashIQD + depositCardIQD;
    const depositUSD = depositCashUSD + depositCardUSD;

    const guest = {
        id: Math.random().toString(36).substring(2, 11),
        roomId: roomId,
        name: document.getElementById('guestName').value,
        phone: document.getElementById('guestPhone').value,
        nationality: document.getElementById('guestNationality').value,
        idType: document.getElementById('idType').value,
        idNumber: document.getElementById('idNumber').value,
        email: document.getElementById('guestEmail').value,
        numGuests: parseInt(document.getElementById('numGuests').value),
        checkIn: document.getElementById('checkInDateTime').value,
        // The real wall-clock moment this check-in was entered — separate from the (possibly
        // backdated) checkIn field above. A guest who actually walks in at 1am is deliberately
        // logged as checking in "yesterday evening" so the night gets billed to the room the hotel
        // sold it for — but the receptionist who did that data entry is standing there at 1am, in
        // their real shift, and must get credit for it. Shift Report matching uses this field so a
        // backdated checkIn can never fall outside — or worse, before — the shift that created it.
        checkInRecordedAt: new Date().toISOString(),
        checkOut: document.getElementById('checkOutDateTime').value || (() => {
            const d = new Date(document.getElementById('checkInDateTime').value || new Date());
            d.setDate(d.getDate() + 1);
            d.setHours(12, 0, 0, 0);
            return d.toISOString();
        })(),
        basePriceIQD: priceIQD,
        basePriceUSD: priceUSD,
        basePrice: priceIQD || priceUSD,
        depositCashIQD: depositCashIQD,
        depositCashUSD: depositCashUSD,
        depositCardIQD: depositCardIQD,
        depositCardUSD: depositCardUSD,
        depositIQD: depositIQD,
        depositUSD: depositUSD,
        notes: (document.getElementById('checkInNotes')?.value || '').trim(),
        orders: [],
        totalSpent: 0,
        checkedInBy: loggedInUser?.name || '—'
    };

    // Check if this is a temporary occupancy on a reserved room
    const tempRoomId = parseInt(document.getElementById('checkInForm').dataset.tempRoomId || '0');
    const isTemp = tempRoomId === room.id && room.status === 'reserved' && room.reservationInfo;

    // Checking in the actual reserved guest (not a temp walk-in) — the deposit fields above were
    // pre-filled by openCheckInFromReservation() from the reservation's already-collected amount,
    // which was already credited to whoever took the reservation (via reservationLog). Tag how much
    // of this guest's deposit is that carried-over money, capped at what was actually pre-filled, so
    // reports can keep it in the guest's running total (needed for the checkout balance-due math)
    // without counting it a second time as fresh income under whoever happens to check the guest in.
    if (!isTemp && room.status === 'reserved' && room.reservationInfo) {
        const ri = room.reservationInfo;
        guest.depositCarryCashIQD = Math.min(depositCashIQD, ri.depositCashIQD || 0);
        guest.depositCarryCashUSD = Math.min(depositCashUSD, ri.depositCashUSD || 0);
        guest.depositCarryCardIQD = Math.min(depositCardIQD, ri.depositCardIQD || 0);
    }

    if (isTemp) {
        // Validate checkout is before reservation arrival
        const checkoutDT  = new Date(guest.checkOut);
        const arrivalDT   = new Date(room.reservationInfo.arrivalDate);
        if (guest.checkOut && checkoutDT > arrivalDT) {
            showToast(`Checkout must be before reservation arrival (${arrivalDT.toLocaleDateString()})`, 'error');
            return;
        }
        room.isTemporary      = true;
        room.savedReservation = { ...room.reservationInfo }; // keep reservation safe
    } else {
        room.isTemporary      = false;
        room.savedReservation = null;
        room.reservationInfo  = null;
    }

    room.status = 'occupied';
    room.currentGuest = { name: guest.name, id: guest.id };

    hotelData.guests.push(guest);
    const tempNote = isTemp ? ' (temporary — room reserved)' : '';
    addActivity(`Guest ${guest.name} checked in to Room ${room.number}${tempNote}`);
    saveDataToStorage();

    showToast(`${guest.name} — ${t('toast_checkin_ok')}`, 'success');
    _lastCheckedInRoomId = room.id;
    document.getElementById('checkInForm').reset();
    resetPriceFields();
    loadCheckInPage();

    // Switch modal to success state
    document.getElementById('checkInModalForm').style.display = 'none';
    document.getElementById('checkInModalSuccess').style.display = '';
    document.getElementById('checkInSuccessMsg').textContent = `${guest.name} — ${t('room_prefix')} ${room.number}`;
}

function groupCheckIn(roomId) {
    if (!requireOnline()) return;
    const room = hotelData.rooms.find(r => r.id === roomId);
    const roomCfg = getStatusConfig(room.status);
    if (!room || (!roomCfg.bookable && room.status !== 'reserved')) {
        showToast(t('toast_room_unavailable'), 'error');
        return;
    }
    if (!confirm(t('confirm_group_checkin') || 'Check in this room as a Group (no guest details, no charges)?')) return;

    const now = new Date();
    const checkOut = new Date(now.getTime() + 86400000);

    const guest = {
        id: Math.random().toString(36).substring(2, 11),
        roomId: roomId,
        name: t('lbl_group') || 'Group',
        phone: '', nationality: '', idType: '', idNumber: '', email: '',
        numGuests: 1,
        checkIn: toLocalDateTimeString(now),
        checkInRecordedAt: now.toISOString(),
        checkOut: toLocalDateTimeString(checkOut),
        basePriceIQD: 0, basePriceUSD: 0, basePrice: 0,
        depositCashIQD: 0, depositCashUSD: 0, depositCardIQD: 0, depositCardUSD: 0,
        depositIQD: 0, depositUSD: 0,
        notes: '',
        orders: [],
        totalSpent: 0,
        checkedInBy: loggedInUser?.name || '—',
        isGroup: true
    };

    room.isTemporary = false;
    room.savedReservation = null;
    room.reservationInfo = null;
    room.status = 'occupied';
    room.currentGuest = { name: guest.name, id: guest.id };

    hotelData.guests.push(guest);
    addActivity(`Room ${room.number} checked in as Group (no charges)`);
    saveDataToStorage();
    showToast(t('toast_group_checkin') || 'Room checked in as Group.', 'success');
    loadCheckInPage();
}

// ==================== CHECK OUT ====================
function loadCheckOutPage() {
    populateFilterSelects('coFilterFloor', 'coFilterType');
    populateOccupiedRooms();
}

function filterCheckOutRooms() {
    const floor = document.getElementById('coFilterFloor')?.value || 'all';
    const type  = document.getElementById('coFilterType')?.value  || 'all';
    const occupied = hotelData.rooms.filter(r => r.status === 'occupied' && r.currentGuest);
    populateOccupiedRooms(applyRoomFilters(occupied, { floor, type }));
}

function populateOccupiedRooms(rooms = null) {
    const occupiedRooms = rooms !== null ? rooms : hotelData.rooms.filter(r => r.status === 'occupied' && r.currentGuest);
    const list = document.getElementById('occupiedRoomsList');
    list.innerHTML = '';

    if (occupiedRooms.length === 0) {
        list.innerHTML = `<p class="text-gray-500 text-center py-4">${t('status_occupied')}: 0</p>`;
        return;
    }

    occupiedRooms.forEach(room => {
        const isTemp = room.isTemporary && room.savedReservation;
        const div = document.createElement('div');
        div.className = `p-3 border-l-4 rounded cursor-pointer transition ${isTemp ? 'bg-amber-50 border-amber-400 hover:bg-amber-100' : 'bg-red-50 border-red-500 hover:bg-red-100'}`;
        div.onclick = () => loadCheckOutForm(room.id);
        const deadlineBadge = isTemp
            ? `<p class="text-xs font-semibold text-amber-700 mt-1">
                   <i class="fas fa-clock mr-1"></i>Must leave by ${new Date(room.savedReservation.arrivalDate).toLocaleDateString()}
               </p>`
            : '';
        div.innerHTML = `
            <p class="font-semibold">${t('room_prefix')} ${room.number}</p>
            <p class="text-sm text-gray-600">${room.currentGuest.name}</p>
            ${deadlineBadge}
        `;
        list.appendChild(div);
    });
}

function loadCheckOutForm(roomId) {
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room || !room.currentGuest) return;
    const guest = hotelData.guests.find(g => g.id === room.currentGuest.id);
    if (!guest) return;
    if (!Array.isArray(guest.orders)) guest.orders = [];
    _currentCheckoutRoomId = roomId;

    const checkInDate = new Date(guest.checkIn);
    // If checkout date is missing, default to check-in + 1 day
    let checkOutDate = guest.checkOut ? new Date(guest.checkOut) : new Date(checkInDate.getTime() + 86400000);
    if (!guest.checkOut) guest.checkOut = toLocalDateTimeString(checkOutDate);

    // Late-checkout rule: if the guest is still in the room past the cutoff time on their
    // planned checkout date, roll the date forward a day (and again, if they're overdue by
    // more than one day) — same as a hotel charging another night for staying past checkout time.
    const cutoffHour = hotelData.settings.checkoutCutoffHour ?? 13;
    const now = new Date();
    const plannedCheckOutDate = new Date(checkOutDate);
    let lateExtensionApplied = false;
    while (true) {
        const cutoffMoment = new Date(checkOutDate);
        cutoffMoment.setHours(cutoffHour, 0, 0, 0);
        if (now >= cutoffMoment) {
            checkOutDate.setDate(checkOutDate.getDate() + 1);
            lateExtensionApplied = true;
        } else break;
    }
    if (lateExtensionApplied) {
        guest.checkOut = toLocalDateTimeString(checkOutDate);
        saveDataToStorage();
    }

    const nights = Math.max(1, Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)));

    // Determine room currency
    const roomIsUSD = (guest.basePriceUSD > 0);
    const roomSymbol = roomIsUSD ? '$' : 'IQD';
    let finalPrice = roomIsUSD ? (guest.basePriceUSD || 0) : (guest.basePriceIQD || guest.basePrice || 0);
    if (guest.discountType === 'percentage' && guest.discount) {
        finalPrice = finalPrice - (finalPrice * guest.discount / 100);
    } else if (guest.discount) {
        finalPrice = finalPrice - guest.discount;
    }
    finalPrice = Math.max(0, finalPrice);

    const roomCharges = finalPrice * nights;
    // Services always in IQD
    const serviceTotal = guest.orders.reduce((sum, order) => sum + (order.price * order.quantity), 0);

    // Balance due after deposit (room charges + services - deposit already paid)
    // Everything is converted to a single IQD figure using the exchange rate, so USD and IQD
    // amounts (room price, deposit, services, payment) can be compared/combined directly.
    const rate = hotelData.settings.exchangeRate || 1500;
    const depositIQD = guest.depositIQD || 0;
    const depositUSD = guest.depositUSD || 0;
    const roomChargeIQD = roomIsUSD ? roomCharges * rate : roomCharges;
    const depositIQDEquivalent = depositIQD + (depositUSD * rate);
    const balanceIQD = Math.max(0, roomChargeIQD + serviceTotal - depositIQDEquivalent);
    const balanceUSD = balanceIQD / rate;
    _checkoutBalanceIQD = balanceIQD;
    _checkoutRate = rate;
    // If the deposit alone covers more than the full bill (room + services), the guest is owed
    // change back — track it explicitly so it can be recorded and deducted from the vault/shift
    // report, instead of just silently absorbing the overpaid deposit as if it were kept income.
    const overpaidIQD = Math.max(0, depositIQDEquivalent - (roomChargeIQD + serviceTotal));

    const orderItems = guest.orders.map(order => `
        <tr>
            <td>${order.category ? catNameByKey(order.category) + ': ' : ''}${order.name}</td>
            <td>${order.quantity}</td>
            <td>IQD ${fmtIQD(order.price * order.quantity)}</td>
        </tr>
    `).join('');

    const locale = currentLang === 'ar' ? 'ar-IQ' : 'en-US';
    const content = document.getElementById('checkOutContent');
    content.innerHTML = `
        <div class="mb-5">
            <h4 class="text-lg font-bold text-gray-800 mb-4">${t('guest_information')}</h4>
            <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="info-item">
                    <div class="info-label">${t('col_guest_name')}</div>
                    <div class="info-value">${guest.name}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">${t('col_room')}</div>
                    <div class="info-value">${t('room_prefix')} ${room.number}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">${t('check_in_label')}</div>
                    <div class="info-value">${new Date(guest.checkIn).toLocaleString(locale)}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">${t('check_out_label')}</div>
                    <div>
                        <input type="datetime-local" id="checkoutDateModify"
                            value="${toLocalDateTimeString(checkOutDate)}"
                            class="px-3 py-2 border border-gray-300 rounded text-sm font-semibold w-full"
                            onchange="modifyCheckoutDate(${roomId}, this.value)">
                        <span class="text-xs text-gray-400">${t('change_adjust')}</span>
                    </div>
                </div>
                ${lateExtensionApplied ? `
                <div class="info-item" style="border-left-color: #d97706; grid-column: 1 / -1; background:#fffbeb;">
                    <div class="info-label"><i class="fas fa-clock mr-1" style="color:#d97706;"></i>${t('lbl_late_checkout')||'Late Checkout — Extra Night Added'}</div>
                    <div class="info-value" style="color:#92400e;font-size:0.85rem;font-weight:500;">
                        ${t('late_checkout_note')||'Guest was still in the room past'} ${new Date(2000,0,1,cutoffHour).toLocaleTimeString([], {hour:'numeric', minute:'2-digit'})} ${t('on_their_planned_checkout_date')||'on their planned checkout date'} (${plannedCheckOutDate.toLocaleDateString()}) — ${t('checkout_date_updated_to')||'checkout date updated to'} ${checkOutDate.toLocaleDateString()}.
                    </div>
                </div>` : ''}
                ${(guest.depositIQD > 0 || guest.depositUSD > 0) ? `
                <div class="info-item" style="border-left-color: #10b981; grid-column: 1 / -1;">
                    <div class="info-label"><i class="fas fa-hand-holding-usd mr-1 text-green-600"></i>${t('lbl_deposit_paid') || 'Deposit Paid'}</div>
                    <div class="info-value" style="color: #059669; display:flex; flex-wrap:wrap; gap:14px; font-size:0.95rem;">
                        ${guest.depositCashIQD > 0 ? `<span><i class="fas fa-money-bill-wave mr-1"></i>${t('lbl_cash')||'Cash'} IQD ${fmtIQD(guest.depositCashIQD)}</span>` : ''}
                        ${guest.depositCashUSD > 0 ? `<span><i class="fas fa-money-bill-wave mr-1"></i>${t('lbl_cash')||'Cash'} $${guest.depositCashUSD.toFixed(2)}</span>` : ''}
                        ${guest.depositCardIQD > 0 ? `<span><i class="fas fa-credit-card mr-1"></i>${t('lbl_mastercard')||'MasterCard'} IQD ${fmtIQD(guest.depositCardIQD)}</span>` : ''}
                    </div>
                </div>` : ''}
                <div class="info-item" style="border-left-color: #f59e0b; grid-column: 1 / -1;">
                    <div class="info-label"><i class="fas fa-balance-scale mr-1" style="color:#d97706;"></i>${t('lbl_balance_due')||'Balance Due'}</div>
                    <div class="info-value" style="color: #b45309;">
                        ${balanceIQD > 0
                            ? `IQD ${fmtIQD(balanceIQD)} <span style="color:#9ca3af;font-weight:500;">(&asymp; $${fmtUSD(balanceUSD)})</span>`
                            : `<span style="color:#15803d;">${t('lbl_fully_paid')||'Fully covered by deposit'}</span>`}
                    </div>
                    ${overpaidIQD > 0 ? `
                    <div class="text-sm mt-1" style="color:#b45309;font-weight:700;">
                        <i class="fas fa-hand-holding-usd mr-1"></i>Change owed to guest: IQD ${fmtIQD(overpaidIQD)} <span style="color:#9ca3af;font-weight:500;">(&asymp; $${fmtUSD(overpaidIQD/rate)})</span>
                    </div>` : ''}
                    <div class="text-xs text-gray-400 mt-1">${t('exchange_rate_note')||'Rate used'}: $1 = IQD ${fmtIQD(rate)}</div>
                </div>
            </div>
        </div>

        <div class="mb-5">
            <h4 class="text-lg font-bold text-gray-800 mb-3">${t('invoice_summary')}</h4>
            <table class="w-full text-sm border-collapse">
                <thead>
                    <tr class="border-b-2 border-gray-300">
                        <th class="text-left py-2">${t('col_description')}</th>
                        <th class="text-right py-2">${t('col_amount')}</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Room charges in room currency -->
                    <tr class="border-b border-gray-200">
                        <td class="py-2">${t('room_charges')} (${nights} ${t('nights_label')} × ${roomSymbol} ${roomSymbol==='IQD'?fmtIQD(finalPrice):finalPrice.toLocaleString()}/${t('per_night')})</td>
                        <td class="text-right py-2 font-semibold">${roomSymbol} ${roomSymbol==='IQD'?fmtIQD(roomCharges):roomCharges.toLocaleString()}</td>
                    </tr>
                    <tr class="bg-blue-50 border-b-2 border-blue-200">
                        <td class="py-2 font-bold">${t('room_charges')} ${t('grand_total_label')}</td>
                        <td class="text-right py-2 font-bold text-blue-700">${roomSymbol} ${roomSymbol==='IQD'?fmtIQD(roomCharges):roomCharges.toLocaleString()}</td>
                    </tr>
                    ${guest.orders.length > 0 ? `
                        <tr class="border-b border-gray-100">
                            <td colspan="2" class="py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">${t('services_label')} (IQD)</td>
                        </tr>
                        ${orderItems}
                        <tr class="bg-green-50 border-t-2 border-green-200">
                            <td class="py-2 font-bold">${t('services_label')} ${t('grand_total_label')}</td>
                            <td class="text-right py-2 font-bold text-green-700">IQD ${fmtIQD(serviceTotal)}</td>
                        </tr>
                    ` : ''}
                </tbody>
            </table>
        </div>

        <div class="mb-5">
            <h4 class="text-lg font-bold text-gray-800 mb-2"><i class="fas fa-cash-register mr-2 text-green-600"></i>${t('checkout_payment_title')||'Checkout Payment'}</h4>
            <p class="text-xs text-gray-500 mb-2">${t('checkout_payment_hint')||'Enter the amount being collected from the guest now.'}</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div style="margin-bottom:0;">
                    <label class="block text-xs font-semibold text-gray-600 mb-1">Cash IQD</label>
                    <div style="position:relative;">
                        <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:#6b7280;font-weight:600;font-size:0.85rem;">IQD</span>
                        <input type="text" inputmode="numeric" id="checkoutCashIQD" placeholder="0" style="padding-left:52px;"
                            class="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                            oninput="this.value=this.value.replace(/[^0-9]/g,'').replace(/\\B(?=(\\d{3})+(?!\\d))/g,',');updateCheckoutRemaining()">
                    </div>
                </div>
                <div style="margin-bottom:0;">
                    <label class="block text-xs font-semibold text-gray-600 mb-1">Cash USD</label>
                    <div style="position:relative;">
                        <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:#6b7280;font-weight:600;font-size:0.85rem;">$</span>
                        <input type="number" id="checkoutCashUSD" step="0.01" min="0" placeholder="0.00" style="padding-left:36px;"
                            class="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                            oninput="updateCheckoutRemaining()">
                    </div>
                </div>
                <div style="margin-bottom:0;">
                    <label class="block text-xs font-semibold text-gray-600 mb-1">MasterCard IQD</label>
                    <div style="position:relative;">
                        <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:#6b7280;font-weight:600;font-size:0.85rem;">IQD</span>
                        <input type="text" inputmode="numeric" id="checkoutCardIQD" placeholder="0" style="padding-left:52px;"
                            class="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                            oninput="this.value=this.value.replace(/[^0-9]/g,'').replace(/\\B(?=(\\d{3})+(?!\\d))/g,',');updateCheckoutRemaining()">
                    </div>
                </div>
            </div>
            <div id="checkoutRemainingBalance" style="margin-top:10px;padding:9px 14px;border-radius:8px;font-size:0.88rem;font-weight:700;"></div>
        </div>

        ${overpaidIQD > 0 ? `
        <div class="mb-5">
            <h4 class="text-lg font-bold text-gray-800 mb-2"><i class="fas fa-hand-holding-usd mr-2 text-amber-600"></i>Refund to Guest</h4>
            <p class="text-xs text-gray-500 mb-2">The deposit covers more than the bill — record exactly how the change was handed back. Defaults to the full amount owed; adjust if it was split or given differently.</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div style="margin-bottom:0;">
                    <label class="block text-xs font-semibold text-gray-600 mb-1">Cash IQD</label>
                    <div style="position:relative;">
                        <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:#6b7280;font-weight:600;font-size:0.85rem;">IQD</span>
                        <input type="text" inputmode="numeric" id="refundCashIQD" value="${Math.round(overpaidIQD).toLocaleString('en-US')}" style="padding-left:52px;"
                            class="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500"
                            oninput="this.value=this.value.replace(/[^0-9]/g,'').replace(/\\B(?=(\\d{3})+(?!\\d))/g,',')">
                    </div>
                </div>
                <div style="margin-bottom:0;">
                    <label class="block text-xs font-semibold text-gray-600 mb-1">Cash USD</label>
                    <div style="position:relative;">
                        <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:#6b7280;font-weight:600;font-size:0.85rem;">$</span>
                        <input type="number" id="refundCashUSD" step="0.01" min="0" placeholder="0.00" style="padding-left:36px;"
                            class="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500">
                    </div>
                </div>
                <div style="margin-bottom:0;">
                    <label class="block text-xs font-semibold text-gray-600 mb-1">MasterCard IQD</label>
                    <div style="position:relative;">
                        <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:#6b7280;font-weight:600;font-size:0.85rem;">IQD</span>
                        <input type="text" inputmode="numeric" id="refundCardIQD" placeholder="0" style="padding-left:52px;"
                            class="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500"
                            oninput="this.value=this.value.replace(/[^0-9]/g,'').replace(/\\B(?=(\\d{3})+(?!\\d))/g,',')">
                    </div>
                </div>
            </div>
        </div>` : ''}

        <div class="mb-5">
            <h4 class="text-lg font-bold text-gray-800 mb-2"><i class="fas fa-sticky-note mr-2 text-yellow-500"></i>${t('checkout_note_label') || 'Note'}</h4>
            <textarea id="checkoutNote" rows="3"
                placeholder="${t('checkout_note_placeholder') || 'Add a note about this checkout (optional)...'}"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
                style="font-family:inherit;"
            >${guest.checkoutNote || ''}</textarea>
        </div>

        <div class="flex gap-4">
            <button onclick="confirmCheckOut(${roomId}, ${roomCharges}, '${roomSymbol}', ${serviceTotal})" class="btn btn-success flex-1" style="justify-content:center;">
                <i class="fas fa-check"></i> ${t('btn_confirm_checkout')}
            </button>
            <button onclick="printInvoice('${guest.name}', '${room.number}', ${nights}, ${roomCharges}, '${roomSymbol}', ${serviceTotal}, '${guest.checkIn}', '${guest.checkOut}')" class="btn btn-secondary flex-1" style="justify-content:center;">
                <i class="fas fa-print"></i> ${t('btn_print_invoice')}
            </button>
        </div>
    `;
    updateCheckoutRemaining();
}

function confirmCheckOut(roomId, roomAmount, roomSymbol, serviceAmountIQD) {
    if (!requireOnline()) return;
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room || !room.currentGuest) return;
    const guest = hotelData.guests.find(g => g.id === room.currentGuest.id);
    if (!guest) return;

    // Calculate balance after deposit — everything converted to one IQD figure via the
    // exchange rate, so USD/IQD room price, deposit, services, and payment all compare directly.
    const rate = hotelData.settings.exchangeRate || 1500;
    const depositIQD = guest.depositIQD || 0;
    const depositUSD = guest.depositUSD || 0;
    const roomChargeIQD = roomSymbol === 'IQD' ? roomAmount : roomAmount * rate;
    const depositIQDEquivalent = depositIQD + (depositUSD * rate);
    const balanceIQD = Math.max(0, roomChargeIQD + serviceAmountIQD - depositIQDEquivalent);
    const balanceUSD = balanceIQD / rate;

    // Read checkout payment amounts collected now
    const checkoutCashIQD = parseFloat((document.getElementById('checkoutCashIQD')?.value || '0').replace(/,/g, '')) || 0;
    const checkoutCashUSD = parseFloat(document.getElementById('checkoutCashUSD')?.value || '0') || 0;
    const checkoutCardIQD = parseFloat((document.getElementById('checkoutCardIQD')?.value || '0').replace(/,/g, '')) || 0;
    const paidIQDEquivalent = checkoutCashIQD + checkoutCardIQD + (checkoutCashUSD * rate);

    // Change handed back when the deposit alone covers more than the full bill — only present when
    // that "Refund to Guest" section was actually rendered (loadCheckOutForm only shows it then).
    const refundCashIQD = parseFloat((document.getElementById('refundCashIQD')?.value || '0').replace(/,/g, '')) || 0;
    const refundCashUSD = parseFloat(document.getElementById('refundCashUSD')?.value || '0') || 0;
    const refundCardIQD = parseFloat((document.getElementById('refundCardIQD')?.value || '0').replace(/,/g, '')) || 0;

    if (balanceIQD > 0) {
        if (checkoutCashIQD === 0 && checkoutCashUSD === 0 && checkoutCardIQD === 0) {
            showToast(t('err_checkout_payment_required'), 'error');
            return;
        }
        const TOLERANCE_IQD = 1; // guard against float rounding only, not a real discount
        if (paidIQDEquivalent + TOLERANCE_IQD < balanceIQD) {
            showToast(t('err_checkout_payment_insufficient'), 'error');
            return;
        }
    }

    guest.roomAmountPaid  = roomAmount;
    guest.roomCurrency    = roomSymbol;
    guest.serviceAmountIQD = serviceAmountIQD;
    // The stay's real total is room + services, not just the room — services are always tracked in
    // IQD, so convert them into the room's own currency before adding, keeping totalSpent in the
    // same currency as roomAmountPaid/roomCurrency (what every other place that reads it assumes).
    guest.totalSpent      = roomAmount + (roomSymbol === 'IQD' ? serviceAmountIQD : serviceAmountIQD / rate);
    guest.checkedOutAt    = new Date().toISOString();
    guest.checkedOutBy    = loggedInUser?.name || '—';
    guest.checkoutNote    = (document.getElementById('checkoutNote')?.value || '').trim();
    const paymentParts = [];
    if (checkoutCashIQD > 0 || checkoutCashUSD > 0) paymentParts.push('Cash');
    if (checkoutCardIQD > 0) paymentParts.push('MasterCard');
    guest.paymentMethod   = paymentParts.join(' + ');
    guest.checkoutCashIQD = checkoutCashIQD;
    guest.checkoutCashUSD = checkoutCashUSD;
    guest.checkoutCardIQD = checkoutCardIQD;
    guest.refundCashIQD  = refundCashIQD;
    guest.refundCashUSD  = refundCashUSD;
    guest.refundCardIQD  = refundCardIQD;
    guest.balanceIQD = balanceIQD;
    guest.balanceUSD = balanceUSD;

    // Temp-occupied rooms still need cleaning like any other checkout — restore the pending
    // reservation info so reception doesn't lose it, but let the cleaner see it as a checkout.
    if (room.isTemporary && room.savedReservation) {
        room.reservationInfo = { ...room.savedReservation };
        room.isTemporary     = false;
        room.savedReservation = null;
    }
    room.status = 'checkout';
    room.currentGuest = null;

    const svcNote = serviceAmountIQD > 0 ? ` + IQD ${fmtIQD(serviceAmountIQD)} (services)` : '';
    const roomAmtFmt = roomSymbol === 'IQD' ? fmtIQD(roomAmount) : roomAmount.toLocaleString();
    const refundNote = (refundCashIQD > 0 || refundCashUSD > 0 || refundCardIQD > 0)
        ? ` - refunded ${[refundCashIQD>0?`IQD ${fmtIQD(refundCashIQD)}`:'', refundCashUSD>0?`$${refundCashUSD.toFixed(2)}`:'', refundCardIQD>0?`MasterCard IQD ${fmtIQD(refundCardIQD)}`:''].filter(Boolean).join(' + ')} to guest`
        : '';
    addActivity(`Guest ${guest.name} checked out from Room ${room.number} - ${roomSymbol} ${roomAmtFmt}${svcNote}${refundNote}`);
    saveDataToStorage();
    showToast(t('toast_checkout_ok'), 'success');

    const svcLine = serviceAmountIQD > 0
        ? `<p style="color:#6b7280;font-size:0.95rem;margin:4px 0;">${t('services_label')}: <strong>IQD ${fmtIQD(serviceAmountIQD)}</strong></p>`
        : '';
    const paymentLine = guest.paymentMethod
        ? `<p style="color:#6b7280;font-size:0.95rem;margin:4px 0;"><i class="fas fa-credit-card" style="margin-right:4px;"></i>${t('payment_method_label')}: <strong>${guest.paymentMethod}</strong></p>`
        : '';
    const refundLine = (refundCashIQD > 0 || refundCashUSD > 0 || refundCardIQD > 0)
        ? `<p style="color:#b45309;font-size:0.95rem;margin:4px 0;font-weight:600;"><i class="fas fa-hand-holding-usd" style="margin-right:4px;"></i>Refunded to guest: ${[refundCashIQD>0?`IQD ${fmtIQD(refundCashIQD)}`:'', refundCashUSD>0?`$${refundCashUSD.toFixed(2)}`:'', refundCardIQD>0?`MasterCard IQD ${fmtIQD(refundCardIQD)}`:''].filter(Boolean).join(' + ')}</p>`
        : '';
    const noteLine = guest.checkoutNote
        ? `<div style="margin-top:16px;padding:10px 14px;background:#fefce8;border-left:4px solid #eab308;border-radius:8px;font-size:0.9rem;color:#374151;text-align:left;">
               <i class="fas fa-sticky-note" style="color:#eab308;margin-right:6px;"></i>${guest.checkoutNote}
           </div>`
        : '';

    const content = document.getElementById('checkOutContent');
    content.innerHTML = `
        <div style="text-align:center;padding:40px 24px;">
            <div style="width:80px;height:80px;border-radius:50%;background:#dcfce7;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;">
                <i class="fas fa-check-circle" style="font-size:2.5rem;color:#16a34a;"></i>
            </div>
            <h3 style="font-size:1.5rem;font-weight:700;color:#1f2937;margin-bottom:6px;">${t('toast_checkout_ok') || 'Checked Out Successfully'}</h3>
            <p style="font-size:1.05rem;color:#374151;font-weight:600;margin-bottom:4px;">${guest.name} — ${t('room_prefix')} ${room.number}</p>
            <p style="color:#6b7280;font-size:0.95rem;margin:4px 0;">${t('lbl_room')}: <strong>${roomSymbol} ${roomSymbol==='IQD'?fmtIQD(roomAmount):roomAmount.toLocaleString()}</strong></p>
            ${svcLine}
            ${paymentLine}
            ${refundLine}
            ${noteLine}
            <div style="display:flex;gap:12px;justify-content:center;margin-top:28px;flex-wrap:wrap;">
                <button onclick="loadCheckOutPage()" class="btn btn-secondary" style="min-width:140px;justify-content:center;">
                    <i class="fas fa-arrow-left"></i> ${t('back') || 'Back'}
                </button>
            </div>
        </div>
    `;

    populateOccupiedRooms();
}

function printInvoice(guestName, roomNumber, nights, roomCharges, roomSymbol, serviceAmountIQD, checkIn, checkOut) {
    const note = (document.getElementById('checkoutNote')?.value || '').trim();
    const checkInStr  = checkIn  ? new Date(checkIn).toLocaleString()  : '—';
    const checkOutStr = checkOut ? new Date(checkOut).toLocaleString() : '—';
    const hotelName   = hotelData.settings.hotelName || 'Hotel';
    const isRTL = currentLang === 'ar';
    const L = {
        invoice:       t('lbl_invoice'),
        guest:         t('lbl_guest'),
        room:          t('lbl_room'),
        checkin:       t('lbl_checkin'),
        checkout:      t('lbl_checkout'),
        description:   t('lbl_description'),
        amount:        t('lbl_amount'),
        roomSection:   t('room_prefix'),
        roomCharges:   t('lbl_room_charges'),
        roomTotal:     t('lbl_room_total'),
        services:      t('services_label'),
        svcTotal:      t('lbl_services_total'),
        noteLabel:     t('checkout_note_label'),
        thankyou:      t('lbl_thank_you'),
        nights:        t('nights_label'),
    };
    const html = `<!DOCTYPE html>
<html dir="${isRTL ? 'rtl' : 'ltr'}">
<head>
    <meta charset="utf-8">
    <title>${L.invoice} - ${guestName}</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 30px; color: #222; direction: ${isRTL ? 'rtl' : 'ltr'}; }
        .header { text-align: center; margin-bottom: 24px; border-bottom: 3px solid #667eea; padding-bottom: 12px; }
        .header h1 { margin: 0 0 4px; color: #667eea; font-size: 1.8em; }
        .info { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; font-size: 0.95em; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 10px; }
        th, td { padding: 10px 12px; text-align: ${isRTL ? 'right' : 'left'}; border-bottom: 1px solid #e5e7eb; }
        th { background: #667eea; color: white; font-size: 0.85em; text-transform: uppercase; }
        .section-header td { background: #f3f4f6; font-weight: 700; font-size: 0.8em; text-transform: uppercase; color: #6b7280; letter-spacing: 0.05em; }
        .total-room { font-weight: bold; background: #eff6ff; color: #1d4ed8; }
        .total-svc  { font-weight: bold; background: #f0fdf4; color: #15803d; }
        .footer { text-align: center; margin-top: 30px; font-size: 0.85em; color: #9ca3af; border-top: 1px solid #e5e7eb; padding-top: 12px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>${hotelName}</h1>
        <p style="margin:0;color:#6b7280;font-size:0.9em;">${L.invoice} &nbsp;·&nbsp; ${new Date().toLocaleString()}</p>
    </div>
    <div class="info">
        <div>
            <p><strong>${L.guest}:</strong> ${guestName}</p>
            <p><strong>${L.room}:</strong> ${roomNumber}</p>
        </div>
        <div>
            <p><strong>${L.checkin}:</strong> ${checkInStr}</p>
            <p><strong>${L.checkout}:</strong> ${checkOutStr} &nbsp;(${nights} ${L.nights})</p>
        </div>
    </div>
    <table>
        <tr><th>${L.description}</th><th style="text-align:${isRTL?'left':'right'};">${L.amount}</th></tr>
        <tr class="section-header"><td colspan="2">${L.roomSection}</td></tr>
        <tr>
            <td>${L.roomCharges} (${nights} ${L.nights})</td>
            <td style="text-align:${isRTL?'left':'right'};">${roomSymbol} ${roomSymbol==='IQD'?fmtIQD(roomCharges):roomCharges.toLocaleString()}</td>
        </tr>
        <tr class="total-room">
            <td>${L.roomTotal}</td>
            <td style="text-align:${isRTL?'left':'right'};">${roomSymbol} ${roomSymbol==='IQD'?fmtIQD(roomCharges):roomCharges.toLocaleString()}</td>
        </tr>
        ${serviceAmountIQD > 0 ? `
        <tr class="section-header"><td colspan="2">${L.services}</td></tr>
        <tr class="total-svc">
            <td>${L.svcTotal}</td>
            <td style="text-align:${isRTL?'left':'right'};">IQD ${fmtIQD(serviceAmountIQD)}</td>
        </tr>
        ` : ''}
    </table>
    ${note ? `<div style="margin-top:20px;padding:12px 16px;background:#fefce8;border-${isRTL?'right':'left'}:4px solid #eab308;border-radius:4px;font-size:0.9em;">
        <strong>${L.noteLabel}:</strong> ${note}
    </div>` : ''}
    <div class="footer"><p>${L.thankyou}</p></div>
</body>
</html>`;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const printWindow = window.open(url, '', 'height=700,width=860');
    if (printWindow) {
        printWindow.onload = () => { printWindow.print(); URL.revokeObjectURL(url); };
    } else {
        URL.revokeObjectURL(url);
    }
}

// ==================== HISTORY & RECORDS ====================
function loadHistoryPage() {
    displayHistoryRecords(hotelData.guests);
}

function searchHistory() {
    const name = document.getElementById('searchName').value.toLowerCase();
    const roomQuery = document.getElementById('searchRoom').value.trim().toLowerCase();

    let results = hotelData.guests;

    if (name) {
        results = results.filter(g => g.name.toLowerCase().includes(name));
    }

    if (roomQuery) {
        results = results.filter(g => {
            const room = hotelData.rooms.find(r => r.id === g.roomId) ||
                         hotelData.rooms.find(r => r.currentGuest?.id === g.id);
            return room && String(room.number).toLowerCase().includes(roomQuery);
        });
    }

    displayHistoryRecords(results);
}

const HISTORY_PER_PAGE = 10;

function displayHistoryRecords(guests) {
    // newest first
    _historyRecords = [...guests].reverse();
    _historyPage = 1;
    renderHistoryPage();
}

function renderHistoryPage() {
    const table = document.getElementById('historyTable');
    const pagination = document.getElementById('historyPagination');
    table.innerHTML = '';

    if (_historyRecords.length === 0) {
        table.innerHTML = `<tr><td colspan="6" class="text-center text-gray-500 py-8">${t('no_records')}</td></tr>`;
        if (pagination) pagination.innerHTML = '';
        return;
    }

    const totalPages = Math.ceil(_historyRecords.length / HISTORY_PER_PAGE);
    const start = (_historyPage - 1) * HISTORY_PER_PAGE;
    const pageGuests = _historyRecords.slice(start, start + HISTORY_PER_PAGE);
    const locale = currentLang === 'ar' ? 'ar-IQ' : 'en-US';

    pageGuests.forEach(guest => {
        const checkIn  = new Date(guest.checkIn).toLocaleDateString(locale);
        const checkOut = guest.checkOut ? new Date(guest.checkOut).toLocaleDateString(locale) : '-';
        const room = hotelData.rooms.find(r => r.id === guest.roomId) ||
                     hotelData.rooms.find(r => r.currentGuest?.id === guest.id);
        const { amount, symbol, isEstimate } = computeGuestTotal(guest);
        const totalCell = (symbol === 'IQD' ? `IQD ${fmtIQD(amount)}` : `$${amount.toFixed(2)}`) +
            (isEstimate ? ` <span style="color:#9ca3af;font-size:0.78em;">(so far)</span>` : '');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${guest.name}</td>
            <td>${room ? t('room_prefix') + ' ' + room.number : t('na')}</td>
            <td>${checkIn}</td>
            <td>${checkOut}</td>
            <td>${totalCell}</td>
            <td>
                <button onclick="viewGuestDetails('${guest.id}')" class="btn btn-primary btn-sm">
                    <i class="fas fa-eye"></i> ${t('btn_view')}
                </button>
            </td>
        `;
        table.appendChild(row);
    });

    // ── Pagination ──
    if (!pagination) return;
    pagination.innerHTML = '';
    if (totalPages <= 1) return;

    const btn = (label, page, active, disabled) => {
        const b = document.createElement('button');
        b.textContent = label;
        b.style.cssText = `
            min-width:36px;height:36px;padding:0 10px;border-radius:8px;border:2px solid ${active ? '#667eea' : '#e5e7eb'};
            background:${active ? '#667eea' : 'white'};color:${active ? 'white' : '#374151'};
            font-weight:${active ? '700' : '500'};font-size:0.875rem;cursor:${disabled ? 'default' : 'pointer'};
            opacity:${disabled ? '0.4' : '1'};transition:all 0.15s;
        `;
        if (!disabled) b.onclick = () => { _historyPage = page; renderHistoryPage(); };
        return b;
    };

    // Prev
    pagination.appendChild(btn('‹', _historyPage - 1, false, _historyPage === 1));

    // Page numbers — show at most 7 buttons with ellipsis
    const pages = [];
    if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
        pages.push(1);
        if (_historyPage > 3) pages.push('…');
        for (let i = Math.max(2, _historyPage - 1); i <= Math.min(totalPages - 1, _historyPage + 1); i++) pages.push(i);
        if (_historyPage < totalPages - 2) pages.push('…');
        pages.push(totalPages);
    }

    pages.forEach(p => {
        if (p === '…') {
            const span = document.createElement('span');
            span.textContent = '…';
            span.style.cssText = 'padding:0 4px;color:#9ca3af;font-size:0.875rem;line-height:36px;';
            pagination.appendChild(span);
        } else {
            pagination.appendChild(btn(String(p), p, p === _historyPage, false));
        }
    });

    // Next
    pagination.appendChild(btn('›', _historyPage + 1, false, _historyPage === totalPages));
}

function viewGuestDetails(guestId) {
    const guest = hotelData.guests.find(g => g.id === guestId);
    if (!guest) return;
    if (!Array.isArray(guest.orders)) guest.orders = [];

    const room = hotelData.rooms.find(r => r.id === guest.roomId) ||
                 hotelData.rooms.find(r => r.currentGuest?.id === guest.id);
    const locale = currentLang === 'ar' ? 'ar-IQ' : 'en-US';

    // ── Services section (always IQD) ──
    const isAdmin = loggedInUser?.role === 'admin';
    const svcTotal = guest.orders.reduce((s, o) => s + o.price * o.quantity, 0);
    const adminOrderBtns = o => isAdmin ? `
        <span style="display:inline-flex;gap:4px;margin-left:8px;">
            <button onclick="openAdminEditModal('order','${guest.id}','${o.id}')" title="Edit" style="background:#eff6ff;color:#2563eb;border:none;border-radius:5px;width:24px;height:24px;cursor:pointer;font-size:0.72rem;"><i class="fas fa-pen"></i></button>
            <button onclick="adminDeleteOrder('${guest.id}','${o.id}')" title="Delete" style="background:#fef2f2;color:#dc2626;border:none;border-radius:5px;width:24px;height:24px;cursor:pointer;font-size:0.72rem;"><i class="fas fa-trash"></i></button>
        </span>` : '';
    const ordersHtml = guest.orders.length > 0
        ? guest.orders.map(o => `
            <div class="flex justify-between items-center py-2 border-b border-gray-100 text-sm">
                <span class="text-gray-700">${o.category ? catNameByKey(o.category) + ': ' : ''}${o.name} × ${o.quantity}</span>
                <span class="font-semibold text-gray-800" style="display:flex;align-items:center;">IQD ${fmtIQD(o.price * o.quantity)}${adminOrderBtns(o)}</span>
            </div>`).join('') +
          `<div class="flex justify-between py-2 mt-1">
               <span class="font-bold text-green-700">${t('grand_total_label')}</span>
               <span class="font-bold text-green-700">IQD ${fmtIQD(svcTotal)}</span>
           </div>`
        : `<p class="text-gray-400 text-sm py-2">${t('no_orders')}</p>`;

    // ── Room Expense section ──
    // "Grand Total" here must be room + services combined (matching guest.totalSpent, which is what
    // the History & Records list shows) — showing the room charge alone as if it were the full total
    // made it look smaller than money actually collected (deposit + checkout payment, which covers
    // both room and services), which is exactly backwards and confusing.
    let roomExpenseHtml = '';
    if (guest.roomAmountPaid != null) {
        // Checked-out guest — use saved values
        const sym = guest.roomCurrency || 'IQD';
        const amt = guest.roomAmountPaid || 0;
        const svc = guest.serviceAmountIQD || 0;
        const fmtAmt = v => sym === 'IQD' ? `IQD ${fmtIQD(v)}` : `$ ${v.toLocaleString()}`;
        const rate = hotelData.settings.exchangeRate || 1500;
        const total = amt + (sym === 'IQD' ? svc : svc / rate);
        // Total actually collected across the whole stay: deposit paid at check-in + payment taken
        // at checkout, both converted to the room's currency so they compare directly against the
        // bill total above. This is the number that should reconcile with (be >=) the total bill —
        // shown here explicitly so "collected" and "total" are never mysteriously out of sync.
        const depositIQDEq = (guest.depositCashIQD||0) + (guest.depositCardIQD||0) + (guest.depositCashUSD||0) * rate;
        const checkoutIQDEq = (guest.checkoutCashIQD||0) + (guest.checkoutCardIQD||0) + (guest.checkoutCashUSD||0) * rate;
        const refundIQDEq = (guest.refundCashIQD||0) + (guest.refundCardIQD||0) + (guest.refundCashUSD||0) * rate;
        const collectedIQDEq = depositIQDEq + checkoutIQDEq - refundIQDEq;
        const collected = sym === 'IQD' ? collectedIQDEq : collectedIQDEq / rate;
        roomExpenseHtml = `
            <div class="flex justify-between py-2 text-sm">
                <span class="text-gray-700">${t('room_charges')}</span>
                <span class="font-semibold text-gray-800">${fmtAmt(amt)}</span>
            </div>
            ${svc > 0 ? `
            <div class="flex justify-between py-2 text-sm">
                <span class="text-gray-700">${t('services_label')}</span>
                <span class="font-semibold text-gray-800">${sym === 'IQD' ? `IQD ${fmtIQD(svc)}` : `$ ${(svc/rate).toFixed(2)} <span style="color:#9ca3af;">(IQD ${fmtIQD(svc)})</span>`}</span>
            </div>` : ''}
            <div class="flex justify-between py-2 border-t border-gray-200 mt-1">
                <span class="font-bold text-blue-700">${t('grand_total_label')} (${t('room_charges')} + ${t('services_label')})</span>
                <span class="font-bold text-blue-700">${fmtAmt(total)}</span>
            </div>
            ${refundIQDEq > 0 ? `
            <div class="flex justify-between py-2 text-sm">
                <span class="text-gray-700">Refunded to Guest</span>
                <span class="font-semibold" style="color:#b45309;">- ${fmtAmt(refundIQDEq / (sym==='IQD'?1:rate))}</span>
            </div>` : ''}
            <div class="flex justify-between py-2 mt-1" style="background:#f0fdf4;border-radius:6px;padding-left:8px;padding-right:8px;">
                <span class="font-bold text-green-700">Total Collected (Deposit + Checkout Payment${refundIQDEq > 0 ? ' − Refund' : ''})</span>
                <span class="font-bold text-green-700">${fmtAmt(collected)}</span>
            </div>`;
    } else if (guest.checkIn) {
        // Still checked in — estimate from rate × nights, plus any services already ordered so far
        const checkInD  = new Date(guest.checkIn);
        const checkOutD = guest.checkOut ? new Date(guest.checkOut) : new Date();
        const nights    = Math.max(1, Math.ceil((checkOutD - checkInD) / 86400000));
        const isUSD     = guest.basePriceUSD > 0;
        const rate      = isUSD ? (guest.basePriceUSD || 0) : (guest.basePriceIQD || guest.basePrice || 0);
        const roomTotal = rate * nights;
        const exRate    = hotelData.settings.exchangeRate || 1500;
        const total     = roomTotal + (isUSD ? svcTotal / exRate : svcTotal);
        const fmtRate   = isUSD ? `$ ${rate.toLocaleString()}` : `IQD ${fmtIQD(rate)}`;
        const fmtRoomTotal = isUSD ? `$ ${roomTotal.toLocaleString()}` : `IQD ${fmtIQD(roomTotal)}`;
        const fmtTotal  = isUSD ? `$ ${total.toLocaleString()}` : `IQD ${fmtIQD(total)}`;
        roomExpenseHtml = `
            <div class="flex justify-between py-2 text-sm">
                <span class="text-gray-700">${t('room_charges')} (${nights} ${t('nights_label')} × ${fmtRate})</span>
                <span class="font-semibold text-gray-800">${fmtRoomTotal}</span>
            </div>
            ${svcTotal > 0 ? `
            <div class="flex justify-between py-2 text-sm">
                <span class="text-gray-700">${t('services_label')} <span style="color:#9ca3af;">(so far)</span></span>
                <span class="font-semibold text-gray-800">IQD ${fmtIQD(svcTotal)}</span>
            </div>` : ''}
            <div class="flex justify-between py-2 border-t border-gray-200 mt-1">
                <span class="font-bold text-blue-700">${t('grand_total_label')} (${t('room_charges')} + ${t('services_label')})</span>
                <span class="font-bold text-blue-700">${fmtTotal}</span>
            </div>`;
    }

    document.getElementById('guestDetailsContent').innerHTML = `
        ${isAdmin ? `<div class="flex justify-end mb-2">
            <button onclick="openAdminEditModal('guestinfo','${guest.id}')" class="btn btn-secondary btn-sm"><i class="fas fa-pen"></i> Edit Info</button>
        </div>` : ''}
        <div class="grid grid-cols-2 gap-3 mb-5">
            <div class="info-item"><div class="info-label">${t('label_full_name')}</div><div class="info-value">${guest.name}</div></div>
            <div class="info-item"><div class="info-label">${t('col_room')}</div><div class="info-value">${room ? t('room_prefix') + ' ' + room.number : t('na')}</div></div>
            <div class="info-item"><div class="info-label">${t('label_phone')}</div><div class="info-value">${guest.phone || '-'}</div></div>
            <div class="info-item"><div class="info-label">${t('label_email')}</div><div class="info-value">${guest.email || '-'}</div></div>
            <div class="info-item"><div class="info-label">${t('label_nationality')}</div><div class="info-value">${guest.nationality || '-'}</div></div>
            <div class="info-item"><div class="info-label">${t('label_num_guests')}</div><div class="info-value">${guest.numGuests}</div></div>
            <div class="info-item"><div class="info-label">${t('label_id_type')}</div><div class="info-value">${guest.idType || '-'}</div></div>
            <div class="info-item"><div class="info-label">${t('label_id_number')}</div><div class="info-value">${guest.idNumber || '-'}</div></div>
            <div class="info-item"><div class="info-label">${t('check_in_label')}</div><div class="info-value">${new Date(guest.checkIn).toLocaleString(locale)}</div></div>
            <div class="info-item"><div class="info-label">${t('check_out_label')}</div><div class="info-value">${guest.checkedOutAt ? new Date(guest.checkedOutAt).toLocaleString(locale) : '-'}</div></div>
        </div>

        <div class="mb-4">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;padding-bottom:8px;border-bottom:2px solid #f3f4f6;">
                <div style="width:28px;height:28px;border-radius:8px;background:linear-gradient(135deg,#10b981,#059669);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                    <i class="fas fa-concierge-bell" style="color:white;font-size:0.75em;"></i>
                </div>
                <span class="font-bold text-gray-700">${t('orders_services_label')}</span>
            </div>
            ${ordersHtml}
        </div>

        <div class="mb-4">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:10px;padding-bottom:8px;border-bottom:2px solid #f3f4f6;">
                <div style="display:flex;align-items:center;gap:8px;">
                    <div style="width:28px;height:28px;border-radius:8px;background:linear-gradient(135deg,#10b981,#059669);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                        <i class="fas fa-hand-holding-usd" style="color:white;font-size:0.75em;"></i>
                    </div>
                    <span class="font-bold text-gray-700">${t('section_deposit') || 'Deposit / Advance Payment'} <span style="font-weight:500;color:#9ca3af;">(Check-In)</span></span>
                </div>
                ${isAdmin ? `<span style="display:flex;gap:6px;">
                    <button onclick="openAdminEditModal('checkin','${guest.id}')" style="background:#eff6ff;color:#2563eb;border:none;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.72rem;font-weight:600;"><i class="fas fa-pen"></i> Edit</button>
                    ${!guest.checkedOutAt ? `<button onclick="adminDeleteCheckIn('${guest.id}')" style="background:#fef2f2;color:#dc2626;border:none;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.72rem;font-weight:600;"><i class="fas fa-trash"></i> Delete</button>` : ''}
                </span>` : ''}
            </div>
            ${(guest.depositIQD > 0 || guest.depositUSD > 0) ? `
            <div class="flex justify-between py-2 text-sm">
                <span class="text-gray-700">${t('lbl_deposit_paid') || 'Deposit Paid'}</span>
                <span class="font-semibold text-green-700">
                    ${guest.depositCashIQD > 0 ? `Cash IQD ${fmtIQD(guest.depositCashIQD)}` : ''}
                    ${guest.depositCashIQD > 0 && (guest.depositCashUSD > 0 || guest.depositCardIQD > 0) ? ' + ' : ''}
                    ${guest.depositCashUSD > 0 ? `Cash $${guest.depositCashUSD.toFixed(2)}` : ''}
                    ${guest.depositCashUSD > 0 && guest.depositCardIQD > 0 ? ' + ' : ''}
                    ${guest.depositCardIQD > 0 ? `MasterCard IQD ${fmtIQD(guest.depositCardIQD)}` : ''}
                </span>
            </div>` : `<p class="text-gray-400 text-sm py-2">${t('na')}</p>`}
        </div>

        <div class="mb-5">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:10px;padding-bottom:8px;border-bottom:2px solid #f3f4f6;">
                <div style="display:flex;align-items:center;gap:8px;">
                    <div style="width:28px;height:28px;border-radius:8px;background:linear-gradient(135deg,#3b82f6,#2563eb);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                        <i class="fas fa-bed" style="color:white;font-size:0.75em;"></i>
                    </div>
                    <span class="font-bold text-gray-700">${t('lbl_room_charges')} ${guest.checkedOutAt ? '<span style="font-weight:500;color:#9ca3af;">(Check-Out)</span>' : ''}</span>
                </div>
                ${isAdmin && guest.checkedOutAt ? `<span style="display:flex;gap:6px;">
                    <button onclick="openAdminEditModal('checkout','${guest.id}')" style="background:#eff6ff;color:#2563eb;border:none;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.72rem;font-weight:600;"><i class="fas fa-pen"></i> Edit</button>
                    <button onclick="adminUndoCheckOut('${guest.id}')" style="background:#fef2f2;color:#dc2626;border:none;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.72rem;font-weight:600;"><i class="fas fa-undo"></i> Undo</button>
                </span>` : ''}
            </div>
            ${roomExpenseHtml}
        </div>

        <button onclick="closeModal('guestDetailsModal')" class="btn btn-primary w-full mt-2" style="justify-content:center;">${t('close')}</button>`;

    openModal('guestDetailsModal');
}

// ==================== ADMIN CORRECTIONS ====================
// Lets an admin fix a receptionist's mistake after the fact — wrong price, wrong deposit split,
// wrong checkout amount, wrong service. Every number here is read live everywhere else (Dashboard,
// Reports page, Excel export, Shift Report) — nothing snapshots guest data — so correcting a field
// here immediately corrects every report that reads it, including a shift report for a shift that
// already ended.
function closeAdminEditOverlay() {
    document.getElementById('adminEditOverlay')?.remove();
}

// `refId` is a guest id for kinds order/checkin/checkout/guestinfo, or an array index into
// hotelData.purchases/outsideIncome for those two kinds — the two id spaces never mix per call.
function openAdminEditModal(kind, refId, orderId = null) {
    if (loggedInUser?.role !== 'admin') return;
    if (!requireOnline()) return;
    closeAdminEditOverlay();

    const numFmt = v => Math.round(v || 0).toLocaleString('en-US');
    const attrEsc = s => String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const iqdAttrs = `inputmode="numeric" oninput="this.value=this.value.replace(/[^0-9]/g,'').replace(/\\B(?=(\\d{3})+(?!\\d))/g,',')"`;
    let title = '', fieldsHtml = '', onSave = null, afterSave = null;
    // `guest`/`order`/`entry` are declared with `let` and re-resolved from live hotelData right
    // before saving (see aeSaveBtn.onclick below) — hotelData can be reassigned wholesale while
    // this modal sits open (e.g. the Firebase realtime listener syncing another device's change),
    // which would otherwise leave these pointing at a detached, orphaned object. Editing that stale
    // object and saving would silently do nothing, since it's no longer part of the array that
    // actually gets written back — exactly the kind of "I changed it but nothing downstream moved"
    // bug this guards against.
    let guest = ['order', 'checkin', 'checkout', 'guestinfo'].includes(kind)
        ? hotelData.guests.find(g => g.id === refId)
        : null;
    let order = null, entry = null;
    if (['order', 'checkin', 'checkout', 'guestinfo'].includes(kind) && !guest) return;
    if (guest) afterSave = () => viewGuestDetails(refId);

    if (kind === 'order') {
        order = (guest.orders || []).find(o => o.id === orderId);
        if (!order) return;
        title = `Edit Service`;
        fieldsHtml = `
            <div class="input-group"><label>Name</label>
                <input type="text" id="aeName" value="${attrEsc(order.name)}"></div>
            <div class="input-group"><label>Quantity</label>
                <input type="number" id="aeQty" min="1" value="${order.quantity || 1}"></div>
            <div class="input-group"><label>Unit Price (IQD)</label>
                <input type="text" id="aePrice" value="${numFmt(order.price)}" ${iqdAttrs}></div>`;
        onSave = () => {
            const name = document.getElementById('aeName').value.trim();
            const qty = parseInt(document.getElementById('aeQty').value);
            const price = parseFloat((document.getElementById('aePrice').value || '').replace(/,/g, ''));
            if (!name || !Number.isFinite(qty) || qty < 1 || !Number.isFinite(price) || price < 0) {
                showToast('Enter a valid name, quantity and price.', 'error'); return false;
            }
            order.name = name;
            order.quantity = qty;
            order.price = price;
            addActivity(`Admin corrected service "${name}" for ${guest.name}`);
            return true;
        };
    } else if (kind === 'checkin') {
        title = `Edit Check-In — ${guest.name}`;
        fieldsHtml = `
            <p style="font-size:0.78rem;color:#6b7280;margin-bottom:10px;">Correcting these numbers updates every report that reads them, including past shift reports.</p>
            <div class="grid grid-cols-2 gap-3">
                <div class="input-group" style="margin-bottom:0;"><label>Deposit Cash (IQD)</label>
                    <input type="text" id="aeCashIQD" value="${numFmt(guest.depositCashIQD)}" ${iqdAttrs}></div>
                <div class="input-group" style="margin-bottom:0;"><label>Deposit Cash ($)</label>
                    <input type="number" id="aeCashUSD" step="0.01" min="0" value="${guest.depositCashUSD || 0}"></div>
                <div class="input-group" style="margin-bottom:0;"><label>Deposit MasterCard (IQD)</label>
                    <input type="text" id="aeCardIQD" value="${numFmt(guest.depositCardIQD)}" ${iqdAttrs}></div>
                <div></div>
                <div class="input-group" style="margin-bottom:0;"><label>Room Price / Night (IQD)</label>
                    <input type="text" id="aePriceIQD" value="${numFmt(guest.basePriceIQD)}" ${iqdAttrs}></div>
                <div class="input-group" style="margin-bottom:0;"><label>Room Price / Night ($)</label>
                    <input type="number" id="aePriceUSD" step="0.01" min="0" value="${guest.basePriceUSD || 0}"></div>
            </div>`;
        onSave = () => {
            const cashIQD  = parseFloat((document.getElementById('aeCashIQD').value || '').replace(/,/g, '')) || 0;
            const cashUSD  = parseFloat(document.getElementById('aeCashUSD').value) || 0;
            const cardIQD  = parseFloat((document.getElementById('aeCardIQD').value || '').replace(/,/g, '')) || 0;
            const priceIQD = parseFloat((document.getElementById('aePriceIQD').value || '').replace(/,/g, '')) || 0;
            const priceUSD = parseFloat(document.getElementById('aePriceUSD').value) || 0;
            guest.depositCashIQD = cashIQD;
            guest.depositCashUSD = cashUSD;
            guest.depositCardIQD = cardIQD;
            guest.depositIQD = cashIQD + cardIQD;
            guest.depositUSD = cashUSD;
            guest.basePriceIQD = priceIQD;
            guest.basePriceUSD = priceUSD;
            guest.basePrice = priceIQD || priceUSD;
            addActivity(`Admin corrected check-in details for ${guest.name}`);
            return true;
        };
    } else if (kind === 'checkout') {
        if (!guest.checkedOutAt) return;
        title = `Edit Check-Out — ${guest.name}`;
        fieldsHtml = `
            <p style="font-size:0.78rem;color:#6b7280;margin-bottom:10px;">Correcting these numbers updates every report that reads them, including past shift reports.</p>
            <div class="grid grid-cols-2 gap-3">
                <div class="input-group" style="margin-bottom:0;"><label>Collected Cash (IQD)</label>
                    <input type="text" id="aeCoCashIQD" value="${numFmt(guest.checkoutCashIQD)}" ${iqdAttrs}></div>
                <div class="input-group" style="margin-bottom:0;"><label>Collected Cash ($)</label>
                    <input type="number" id="aeCoCashUSD" step="0.01" min="0" value="${guest.checkoutCashUSD || 0}"></div>
                <div class="input-group" style="margin-bottom:0;"><label>Collected MasterCard (IQD)</label>
                    <input type="text" id="aeCoCardIQD" value="${numFmt(guest.checkoutCardIQD)}" ${iqdAttrs}></div>
                <div></div>
                <div class="input-group" style="margin-bottom:0;"><label>Room Total Charged (${guest.roomCurrency || 'IQD'})</label>
                    <input type="number" id="aeRoomAmt" step="0.01" min="0" value="${guest.roomAmountPaid || 0}"></div>
                <div class="input-group" style="margin-bottom:0;"><label>Services Billed (IQD)</label>
                    <input type="text" id="aeSvcIQD" value="${numFmt(guest.serviceAmountIQD)}" ${iqdAttrs}></div>
            </div>
            <p style="font-size:0.78rem;color:#6b7280;margin:14px 0 10px;">Refund given back to the guest (e.g. their deposit covered more than the bill):</p>
            <div class="grid grid-cols-2 gap-3">
                <div class="input-group" style="margin-bottom:0;"><label>Refunded Cash (IQD)</label>
                    <input type="text" id="aeRefCashIQD" value="${numFmt(guest.refundCashIQD)}" ${iqdAttrs}></div>
                <div class="input-group" style="margin-bottom:0;"><label>Refunded Cash ($)</label>
                    <input type="number" id="aeRefCashUSD" step="0.01" min="0" value="${guest.refundCashUSD || 0}"></div>
                <div class="input-group" style="margin-bottom:0;"><label>Refunded MasterCard (IQD)</label>
                    <input type="text" id="aeRefCardIQD" value="${numFmt(guest.refundCardIQD)}" ${iqdAttrs}></div>
            </div>`;
        onSave = () => {
            guest.checkoutCashIQD  = parseFloat((document.getElementById('aeCoCashIQD').value || '').replace(/,/g, '')) || 0;
            guest.checkoutCashUSD  = parseFloat(document.getElementById('aeCoCashUSD').value) || 0;
            guest.checkoutCardIQD  = parseFloat((document.getElementById('aeCoCardIQD').value || '').replace(/,/g, '')) || 0;
            guest.roomAmountPaid   = parseFloat(document.getElementById('aeRoomAmt').value) || 0;
            guest.serviceAmountIQD = parseFloat((document.getElementById('aeSvcIQD').value || '').replace(/,/g, '')) || 0;
            guest.refundCashIQD    = parseFloat((document.getElementById('aeRefCashIQD').value || '').replace(/,/g, '')) || 0;
            guest.refundCashUSD    = parseFloat(document.getElementById('aeRefCashUSD').value) || 0;
            guest.refundCardIQD    = parseFloat((document.getElementById('aeRefCardIQD').value || '').replace(/,/g, '')) || 0;
            // Same as confirmCheckOut: total is room + services, converted into the room's own
            // currency so totalSpent stays consistent with roomAmountPaid/roomCurrency.
            const rate = hotelData.settings.exchangeRate || 1500;
            guest.totalSpent = guest.roomAmountPaid + (guest.roomCurrency === 'IQD' ? guest.serviceAmountIQD : guest.serviceAmountIQD / rate);
            addActivity(`Admin corrected check-out details for ${guest.name}`);
            return true;
        };
    } else if (kind === 'guestinfo') {
        title = `Edit Guest Info — ${guest.name}`;
        const toLocalInput = iso => iso ? toLocalDateTimeString(new Date(iso)) : '';
        fieldsHtml = `
            <div class="input-group" style="margin-bottom:0;"><label>Full Name</label>
                <input type="text" id="aeGName" value="${attrEsc(guest.name)}"></div>
            <div class="grid grid-cols-2 gap-3 mt-3">
                <div class="input-group" style="margin-bottom:0;"><label>Phone</label>
                    <input type="text" id="aeGPhone" value="${attrEsc(guest.phone)}"></div>
                <div class="input-group" style="margin-bottom:0;"><label>Email</label>
                    <input type="email" id="aeGEmail" value="${attrEsc(guest.email)}"></div>
                <div class="input-group" style="margin-bottom:0;"><label>Nationality</label>
                    <input type="text" id="aeGNat" value="${attrEsc(guest.nationality)}"></div>
                <div class="input-group" style="margin-bottom:0;"><label>Number of Guests</label>
                    <input type="number" id="aeGNum" min="1" value="${guest.numGuests || 1}"></div>
                <div class="input-group" style="margin-bottom:0;"><label>ID Type</label>
                    <select id="aeGIdType">
                        <option value="" ${!guest.idType ? 'selected' : ''}>—</option>
                        <option value="passport" ${guest.idType==='passport'?'selected':''}>Passport</option>
                        <option value="national_id" ${guest.idType==='national_id'?'selected':''}>National ID</option>
                        <option value="driver_license" ${guest.idType==='driver_license'?'selected':''}>Driver License</option>
                    </select></div>
                <div class="input-group" style="margin-bottom:0;"><label>ID / Passport Number</label>
                    <input type="text" id="aeGIdNum" value="${attrEsc(guest.idNumber)}"></div>
                <div class="input-group" style="margin-bottom:0;"><label>Check-In Date &amp; Time</label>
                    <input type="datetime-local" id="aeGCheckIn" value="${toLocalInput(guest.checkIn)}"></div>
                <div class="input-group" style="margin-bottom:0;"><label>Check-Out Date &amp; Time</label>
                    <input type="datetime-local" id="aeGCheckOut" value="${toLocalInput(guest.checkedOutAt || guest.checkOut)}"></div>
            </div>`;
        onSave = () => {
            const name = document.getElementById('aeGName').value.trim();
            if (!name) { showToast('Name is required.', 'error'); return false; }
            guest.name        = name;
            guest.phone       = document.getElementById('aeGPhone').value.trim();
            guest.email       = document.getElementById('aeGEmail').value.trim();
            guest.nationality = document.getElementById('aeGNat').value.trim();
            guest.numGuests   = parseInt(document.getElementById('aeGNum').value) || 1;
            guest.idType      = document.getElementById('aeGIdType').value;
            guest.idNumber    = document.getElementById('aeGIdNum').value.trim();
            const ciVal = document.getElementById('aeGCheckIn').value;
            const coVal = document.getElementById('aeGCheckOut').value;
            if (ciVal) guest.checkIn = new Date(ciVal).toISOString();
            if (coVal) {
                if (guest.checkedOutAt) guest.checkedOutAt = new Date(coVal).toISOString();
                else guest.checkOut = new Date(coVal).toISOString();
            }
            // Keep the room card's guest name in sync if this guest currently occupies a room.
            const room = hotelData.rooms.find(r => r.currentGuest?.id === guest.id);
            if (room) room.currentGuest = { name: guest.name, id: guest.id };
            addActivity(`Admin corrected guest info for ${guest.name}`);
            return true;
        };
    } else if (kind === 'purchase' || kind === 'outsideIncome') {
        entry = (kind === 'purchase' ? (hotelData.purchases || []) : (hotelData.outsideIncome || []))[refId];
        if (!entry) return;
        title = kind === 'purchase' ? 'Edit Purchase' : 'Edit Outside Income';
        fieldsHtml = `
            <div class="input-group" style="margin-bottom:0;"><label>Name</label>
                <input type="text" id="aeEName" value="${attrEsc(entry.name)}"></div>
            <div class="grid grid-cols-3 gap-3 mt-3">
                <div class="input-group" style="margin-bottom:0;"><label>Cash (IQD)</label>
                    <input type="text" id="aeEIQD" value="${numFmt(entry.priceIQD != null ? entry.priceIQD : entry.price)}" ${iqdAttrs}></div>
                <div class="input-group" style="margin-bottom:0;"><label>Cash ($)</label>
                    <input type="number" id="aeEUSD" step="0.01" min="0" value="${entry.priceUSD || 0}"></div>
                <div class="input-group" style="margin-bottom:0;"><label>MasterCard (IQD)</label>
                    <input type="text" id="aeECardIQD" value="${numFmt(entry.priceCardIQD)}" ${iqdAttrs}></div>
            </div>
            <div class="input-group mt-3" style="margin-bottom:0;"><label>Notes</label>
                <input type="text" id="aeENotes" value="${attrEsc(entry.notes)}"></div>`;
        onSave = () => {
            const name = document.getElementById('aeEName').value.trim();
            const iqd  = parseFloat((document.getElementById('aeEIQD').value || '').replace(/,/g, '')) || 0;
            const usd  = parseFloat(document.getElementById('aeEUSD').value) || 0;
            const card = parseFloat((document.getElementById('aeECardIQD').value || '').replace(/,/g, '')) || 0;
            if (!name || (iqd <= 0 && usd <= 0 && card <= 0)) {
                showToast('Enter a name and at least one price.', 'error'); return false;
            }
            entry.name = name;
            entry.priceIQD = iqd;
            entry.priceUSD = usd;
            entry.priceCardIQD = card;
            entry.notes = document.getElementById('aeENotes').value.trim();
            addActivity(`Admin corrected ${kind === 'purchase' ? 'purchase' : 'outside income'} "${name}"`);
            return true;
        };
        afterSave = () => kind === 'purchase' ? loadPurchasesPage() : loadOutsideIncomePage();
    } else return;

    const overlay = document.createElement('div');
    overlay.id = 'adminEditOverlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;';
    overlay.innerHTML = `
        <div style="background:#fff;border-radius:16px;width:100%;max-width:460px;max-height:90vh;overflow-y:auto;padding:24px;box-shadow:0 30px 60px rgba(0,0,0,0.3);">
            <div class="flex justify-between items-center mb-5">
                <h2 class="text-lg font-bold text-gray-800">${title}</h2>
                <button onclick="closeAdminEditOverlay()" class="text-2xl text-gray-400 hover:text-gray-700"><i class="fas fa-times"></i></button>
            </div>
            ${fieldsHtml}
            <div class="flex gap-3 mt-5">
                <button id="aeSaveBtn" class="btn btn-success flex-1"><i class="fas fa-save"></i> Save Changes</button>
                <button type="button" class="btn btn-secondary flex-1" onclick="closeAdminEditOverlay()">Cancel</button>
            </div>
        </div>`;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeAdminEditOverlay(); });
    document.getElementById('aeSaveBtn').onclick = () => {
        if (!requireOnline()) return;
        // Re-resolve against whatever hotelData holds right now — if it was reassigned while this
        // modal was open, `guest`/`order`/`entry` above may point at a detached copy that's no
        // longer part of the live array. onSave() mutates through these same closed-over bindings,
        // so refreshing them here is what makes the edit actually land in the data that gets saved.
        if (guest) {
            guest = hotelData.guests.find(g => g.id === refId) || guest;
            if (kind === 'order') order = (guest.orders || []).find(o => o.id === orderId) || order;
        } else if (kind === 'purchase' || kind === 'outsideIncome') {
            entry = (kind === 'purchase' ? (hotelData.purchases || []) : (hotelData.outsideIncome || []))[refId] || entry;
        }
        if (onSave() === false) return;
        saveDataToStorage();
        showToast('Updated successfully.', 'success');
        closeAdminEditOverlay();
        if (afterSave) afterSave();
    };
}

function adminDeleteOrder(guestId, orderId) {
    if (loggedInUser?.role !== 'admin') return;
    if (!requireOnline()) return;
    const guest = hotelData.guests.find(g => g.id === guestId);
    if (!guest || !Array.isArray(guest.orders)) return;
    const idx = guest.orders.findIndex(o => o.id === orderId);
    if (idx === -1) return;
    if (!confirm(`Delete "${guest.orders[idx].name}" from ${guest.name}'s services? This cannot be undone.`)) return;
    const name = guest.orders[idx].name;
    guest.orders.splice(idx, 1);
    saveDataToStorage();
    addActivity(`Admin deleted service "${name}" for ${guest.name}`);
    showToast('Service deleted.', 'success');
    viewGuestDetails(guestId);
}

// Deletes an entire mistaken check-in (only offered before the guest has checked out) and frees
// the room back up, since the whole stay never should have existed.
function adminDeleteCheckIn(guestId) {
    if (loggedInUser?.role !== 'admin') return;
    if (!requireOnline()) return;
    const guest = hotelData.guests.find(g => g.id === guestId);
    if (!guest || guest.checkedOutAt) return;
    if (!confirm(`Permanently delete this check-in for ${guest.name}? This removes the whole stay record and cannot be undone.`)) return;
    const room = hotelData.rooms.find(r => r.currentGuest?.id === guest.id);
    if (room) {
        room.currentGuest = null;
        const bookable = (hotelData.settings.roomStatuses || []).find(s => s.bookable);
        room.status = bookable ? bookable.id : 'available';
    }
    hotelData.guests = hotelData.guests.filter(g => g.id !== guestId);
    recordTombstone('deletedGuestIds', guestId);
    saveDataToStorage();
    addActivity(`Admin deleted check-in for ${guest.name}`);
    showToast('Check-in deleted.', 'success');
    closeModal('guestDetailsModal');
    loadHistoryPage();
}

// Reverts a checkout back to an active occupied stay — e.g. a receptionist checked the wrong
// guest out, or checked out too early. Clears all checkout-only fields and restores room state.
function adminUndoCheckOut(guestId) {
    if (loggedInUser?.role !== 'admin') return;
    if (!requireOnline()) return;
    const guest = hotelData.guests.find(g => g.id === guestId);
    if (!guest || !guest.checkedOutAt) return;
    if (!confirm(`Undo checkout for ${guest.name} and restore them as a currently occupying guest?`)) return;

    const room = hotelData.rooms.find(r => r.id === guest.roomId);
    if (room) {
        if (room.currentGuest && room.currentGuest.id !== guest.id) {
            showToast('Cannot undo — this room is now occupied by a different guest.', 'error');
            return;
        }
        room.currentGuest = { name: guest.name, id: guest.id };
        room.status = 'occupied';
    }

    guest.checkedOutAt    = null;
    guest.checkedOutBy    = null;
    guest.checkoutCashIQD = 0;
    guest.checkoutCashUSD = 0;
    guest.checkoutCardIQD = 0;
    guest.checkoutNote    = '';
    guest.paymentMethod   = '';
    guest.balanceIQD      = 0;
    guest.balanceUSD      = 0;
    guest.roomAmountPaid  = null;
    guest.roomCurrency    = null;
    guest.serviceAmountIQD = 0;
    guest.totalSpent      = 0;

    saveDataToStorage();
    addActivity(`Admin undid checkout for ${guest.name}`);
    showToast('Checkout undone — guest restored as occupying the room.', 'success');
    viewGuestDetails(guestId);
}

// ==================== REPORTS ====================
let _reportDateFrom = null; // null = All Time
let _reportDateTo   = null;

function loadReportsPage() {
    populateReportMonthYearSelect();
    clearReportDateFilter();
    updateReportCharts();
}

// Fills the Year dropdown with the current year and the past 5 years, defaulted to this month.
function populateReportMonthYearSelect() {
    const yearEl = document.getElementById('repFilterMonthYear');
    const monthEl = document.getElementById('repFilterMonthName');
    if (!yearEl) return;
    const now = new Date();
    const thisYear = now.getFullYear();
    if (!yearEl.options.length) {
        for (let y = thisYear; y >= thisYear - 5; y--) {
            const opt = document.createElement('option');
            opt.value = y; opt.textContent = y;
            yearEl.appendChild(opt);
        }
    }
    yearEl.value = thisYear;
    if (monthEl) monthEl.value = now.getMonth();
}

function applyReportDateFilter(type) {
    if (type === 'day') {
        const v = document.getElementById('repFilterDay')?.value;
        if (!v) return;
        _reportDateFrom = new Date(v + 'T00:00:00');
        _reportDateTo   = new Date(v + 'T23:59:59');
    } else if (type === 'range') {
        const fromV = document.getElementById('repFilterRangeFrom')?.value;
        const toV   = document.getElementById('repFilterRangeTo')?.value;
        if (!fromV || !toV) { showToast('Pick both a From and To date, then click "Show Range".', 'error'); return; }
        const from = new Date(fromV + 'T00:00:00');
        const to   = new Date(toV + 'T23:59:59');
        if (from > to) { showToast('The "From" date must be before the "To" date.', 'error'); return; }
        _reportDateFrom = from;
        _reportDateTo   = to;
    } else if (type === 'month') {
        const m = parseInt(document.getElementById('repFilterMonthName')?.value);
        const y = parseInt(document.getElementById('repFilterMonthYear')?.value);
        if (Number.isNaN(m) || Number.isNaN(y)) return;
        _reportDateFrom = new Date(y, m, 1, 0, 0, 0, 0);
        _reportDateTo   = new Date(y, m + 1, 0, 23, 59, 59, 999);
    }
    updateReportFilterLabel();
    updateReportsStats();
}

function clearReportDateFilter() {
    _reportDateFrom = null;
    _reportDateTo   = null;
    const dayEl = document.getElementById('repFilterDay');
    const rangeFromEl = document.getElementById('repFilterRangeFrom');
    const rangeToEl = document.getElementById('repFilterRangeTo');
    if (dayEl) dayEl.value = '';
    if (rangeFromEl) rangeFromEl.value = '';
    if (rangeToEl) rangeToEl.value = '';
    updateReportFilterLabel();
    updateReportsStats();
}

function updateReportFilterLabel() {
    const el = document.getElementById('repFilterLabel');
    if (!el) return;
    el.textContent = _reportDateFrom
        ? `Showing: ${_reportDateFrom.toLocaleDateString()} – ${_reportDateTo.toLocaleDateString()}`
        : 'Showing: All Time';
}

// Total money actually collected, split by how it was paid (Cash IQD / Cash USD / MasterCard IQD —
// MasterCard is always IQD-only in this app), not by what currency the room happened to be listed
// in. A $100 room paid for in Iraqi cash must count as IQD income, not USD — so this never looks at
// roomCurrency/roomAmountPaid (the room's *listed* price), only the actual payment fields. Deposits
// and checkout payments (which already include room charges + services collected at checkout) are
// combined into one figure per channel — there's no separate "deposit" bucket, a deposit is just
// income collected earlier in the stay.
function updateReportsStats() {
    const inRange = d => { if (!_reportDateFrom) return true; if (!d) return false; const dt = new Date(d); return dt >= _reportDateFrom && dt <= _reportDateTo; };

    // Deposits (check-in + any mid-stay top-ups, already cumulative) count in the period they
    // checked in, the same way the rest of this page treats deposits.
    // Subtract out any portion already counted as a reservation deposit (see depositCarry* in
    // handleCheckIn) so a reserved room's deposit isn't counted once at reservation time and again
    // at check-in.
    const checkInGuests = _reportDateFrom ? hotelData.guests.filter(g => inRange(g.checkIn)) : hotelData.guests;
    let cashIQD = checkInGuests.reduce((s, g) => s + (g.depositCashIQD || 0) - (g.depositCarryCashIQD || 0), 0);
    let cashUSD = checkInGuests.reduce((s, g) => s + (g.depositCashUSD || 0) - (g.depositCarryCashUSD || 0), 0);
    let cardIQD = checkInGuests.reduce((s, g) => s + (g.depositCardIQD || 0) - (g.depositCarryCardIQD || 0), 0);

    // Checkout payments — the actual cash/card collected at checkout (covers room charges +
    // services + any remaining balance after the deposit), counted in the period they checked out.
    const checkedOutGuests = hotelData.guests.filter(g => {
        const hasCheckout = g.checkedOutAt || (g.totalSpent && g.totalSpent > 0);
        if (!hasCheckout) return false;
        if (_reportDateFrom && !(g.checkedOutAt && inRange(g.checkedOutAt))) return false;
        return true;
    });
    // Subtract refund* — change handed back to the guest from an overpaid deposit leaves the vault.
    cashIQD += checkedOutGuests.reduce((s, g) => s + (g.checkoutCashIQD || 0) - (g.refundCashIQD || 0), 0);
    cashUSD += checkedOutGuests.reduce((s, g) => s + (g.checkoutCashUSD || 0) - (g.refundCashUSD || 0), 0);
    cardIQD += checkedOutGuests.reduce((s, g) => s + (g.checkoutCardIQD || 0) - (g.refundCardIQD || 0), 0);
    const totalGuests = checkedOutGuests.length;

    // Reservation deposits (all entries — they stay in income even if cancelled)
    const resLogAll = hotelData.reservationLog || [];
    const resLog = (_reportDateFrom ? resLogAll.filter(e => inRange(e.reservedAt)) : resLogAll).filter(e => e.status !== 'cancelled');
    cashIQD += resLog.reduce((s, e) => s + (e.depositCashIQD || 0), 0);
    cashUSD += resLog.reduce((s, e) => s + (e.depositCashUSD || 0), 0);
    cardIQD += resLog.reduce((s, e) => s + (e.depositCardIQD || 0), 0);

    // Purchases
    const purchasesAll = hotelData.purchases || [];
    const purchases = _reportDateFrom ? purchasesAll.filter(p => inRange(p.date)) : purchasesAll;
    const purchCashIQD = purchases.reduce((s, p) => s + (p.priceIQD != null ? p.priceIQD : (p.price || 0)), 0);
    const purchCardIQDExp = purchases.reduce((s, p) => s + (p.priceCardIQD || 0), 0);
    const purchIQD = purchCashIQD + purchCardIQDExp;
    const purchUSD = purchases.reduce((s, p) => s + (p.priceUSD || 0), 0);

    // Outside income
    const oiAll = hotelData.outsideIncome || [];
    const oi = _reportDateFrom ? oiAll.filter(p => inRange(p.date)) : oiAll;
    const oiIQD     = oi.reduce((s, p) => s + (p.priceIQD     || 0), 0);
    const oiUSD     = oi.reduce((s, p) => s + (p.priceUSD     || 0), 0);
    const oiCardIQD = oi.reduce((s, p) => s + (p.priceCardIQD || 0), 0);

    const occupiedRooms = hotelData.rooms.filter(r => r.status === 'occupied').length;
    const occupancyRate = hotelData.rooms.length > 0 ? ((occupiedRooms / hotelData.rooms.length) * 100).toFixed(1) : 0;

    document.getElementById('totalIncomeIQDReport').textContent = `IQD ${fmtIQD(cashIQD)}`;
    document.getElementById('totalIncomeUSDReport').textContent = `$${fmtUSD(cashUSD)}`;
    document.getElementById('totalIncomeCardIQDReport').textContent = `IQD ${fmtIQD(cardIQD)}`;
    document.getElementById('totalPurchasesIQDReport').textContent = `IQD ${fmtIQD(purchIQD)}`;
    document.getElementById('totalPurchasesUSDReport').textContent = `$${fmtUSD(purchUSD)}`;
    document.getElementById('outsideIncomeIQDReport').textContent     = `IQD ${fmtIQD(oiIQD)}`;
    document.getElementById('outsideIncomeUSDReport').textContent     = `$${fmtUSD(oiUSD)}`;
    const oiCardEl = document.getElementById('outsideIncomeCardIQDReport');
    if (oiCardEl) oiCardEl.textContent = `IQD ${fmtIQD(oiCardIQD)}`;
    document.getElementById('netRevenueIQDReport').textContent = `IQD ${fmtIQD(cashIQD + cardIQD + oiIQD + oiCardIQD - purchIQD)}`;
    document.getElementById('netRevenueUSDReport').textContent = `$${fmtUSD(cashUSD + oiUSD - purchUSD)}`;
    document.getElementById('occupancyRateReport').textContent = `${occupancyRate}%`;

    populateRoomReportTable();
    populateReservationHistoryTable();
}

function updateReportCharts() {
    // Monthly Revenue Chart
    updateMonthlyRevenueChart();
    
    // Top Rooms Chart
    updateTopRoomsChart();
}

function updateMonthlyRevenueChart() {
    const ctx = document.getElementById('monthlyRevenueChart');
    if (!ctx) return;

    const monthlyData = new Array(12).fill(0);
    hotelData.guests.forEach(guest => {
        if (guest.totalSpent && guest.totalSpent > 0) {
            const date = new Date(guest.checkedOutAt || guest.checkOut);
            monthlyData[date.getMonth()] += guest.totalSpent || 0;
        }
    });

    if (charts.monthlyRevenue) charts.monthlyRevenue.destroy();
    
    charts.monthlyRevenue = new window['Chart'](ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Monthly Revenue',
                data: monthlyData,
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#667eea',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: { font: { size: 12 }, padding: 20 }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: function(value) { return '$' + value; } }
                }
            }
        }
    });
}

function updateTopRoomsChart() {
    const ctx = document.getElementById('topRoomsChart');
    if (!ctx) return;

    const roomRevenue = {};
    hotelData.rooms.forEach(room => {
        roomRevenue[room.number] = 0;
    });

    hotelData.guests.forEach(guest => {
        if (guest.totalSpent && guest.totalSpent > 0) {
            const room = hotelData.rooms.find(r => r.id === guest.roomId);
            if (room) {
                roomRevenue[room.number] = (roomRevenue[room.number] || 0) + (guest.totalSpent || 0);
            }
        }
    });

    const sorted = Object.entries(roomRevenue)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

    if (charts.topRooms) charts.topRooms.destroy();

    charts.topRooms = new window['Chart'](ctx, {
        type: 'bar',
        data: {
            labels: sorted.map(r => `${t('room_prefix')} ${r[0]}`),
            datasets: [{
                label: 'Revenue',
                data: sorted.map(r => r[1]),
                backgroundColor: ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe'],
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    ticks: { callback: function(value) { return '$' + value; } }
                }
            }
        }
    });
}

function populateRoomReportTable() {
    const table = document.getElementById('roomReportTable');
    table.innerHTML = '';

    hotelData.rooms.forEach(room => {
        const guestStays = hotelData.guests.filter(g => g.roomId === room.id);
        const revUSD = guestStays.filter(g => g.roomCurrency === '$').reduce((s, g) => s + (g.roomAmountPaid || 0), 0);
        const revIQD = guestStays.filter(g => g.roomCurrency === 'IQD').reduce((s, g) => s + (g.roomAmountPaid || 0), 0);
        const svcIQD = guestStays.reduce((s, g) => s + (g.serviceAmountIQD || 0), 0);
        const lastGuest = guestStays.length > 0 ? guestStays[guestStays.length - 1].name : (room.currentGuest?.name || t('none_label'));

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${t('room_prefix')} ${room.number}</td>
            <td>${room.type}</td>
            <td>${lastGuest}</td>
            <td>${guestStays.length}</td>
            <td>${revUSD > 0 ? '$' + revUSD.toFixed(2) : '—'}</td>
            <td>${revIQD > 0 ? 'IQD ' + fmtIQD(revIQD) : '—'}</td>
            <td>${svcIQD > 0 ? 'IQD ' + fmtIQD(svcIQD) : '—'}</td>
        `;
        table.appendChild(row);
    });
}

function populateReservationHistoryTable() {
    const tbody = document.getElementById('reservationHistoryTable');
    if (!tbody) return;
    const log = hotelData.reservationLog || [];
    if (log.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center text-gray-500 py-8">No reservations yet</td></tr>`;
        return;
    }
    // Show newest first
    tbody.innerHTML = [...log].reverse().map(e => {
        const reservedAt = new Date(e.reservedAt).toLocaleString();
        const arrivalDate = e.arrivalDate ? new Date(e.arrivalDate).toLocaleString() : '—';
        const depParts = [];
        if ((e.depositIQD || 0) > 0) depParts.push(`IQD ${fmtIQD(e.depositIQD)}`);
        if ((e.depositUSD || 0) > 0) depParts.push(`$${e.depositUSD.toFixed(2)}`);
        const deposit = depParts.length ? depParts.join(' + ') : '—';
        const isCancelled = e.status === 'cancelled';
        const statusBadge = isCancelled
            ? `<span style="background:#fee2e2;color:#dc2626;padding:2px 10px;border-radius:999px;font-size:0.75rem;font-weight:600;">Cancelled</span>`
            : `<span style="background:#d1fae5;color:#059669;padding:2px 10px;border-radius:999px;font-size:0.75rem;font-weight:600;">Active</span>`;
        const cancelledAt = isCancelled && e.cancelledAt ? new Date(e.cancelledAt).toLocaleString() : '—';
        return `<tr>
            <td>${t('room_prefix')} ${e.roomNumber}</td>
            <td>${e.guestName}</td>
            <td>${reservedAt}</td>
            <td>${arrivalDate}</td>
            <td>${deposit}</td>
            <td>${e.paymentMethod || '—'}</td>
            <td>${statusBadge}</td>
            <td>${cancelledAt}</td>
        </tr>`;
    }).join('');
}

// ==================== DASHBOARD ====================
function loadDashboard() {
    updateDashboardStats();
    updateDashboardCharts();
    updateRecentActivities();
}

// All-time money actually collected, split by how it was paid: Cash IQD, Cash USD, or MasterCard
// (always IQD-only in this app). Pulls from check-in deposits (incl. mid-stay top-ups), checkout
// payments, and reservation deposits — the same payment-method fields the Shift Report uses.
function calculateTotalIncomeByMethod() {
    let cashIQD = 0, cashUSD = 0, cardIQD = 0;
    hotelData.guests.forEach(g => {
        // Subtract depositCarry* — that portion was already counted below under reservationLog.
        // Subtract refund* — change actually handed back to the guest leaves the vault, so it can't
        // count as kept income even though it was collected via the deposit.
        cashIQD += (g.depositCashIQD || 0) - (g.depositCarryCashIQD || 0) + (g.checkoutCashIQD || 0) - (g.refundCashIQD || 0);
        cashUSD += (g.depositCashUSD || 0) - (g.depositCarryCashUSD || 0) + (g.checkoutCashUSD || 0) - (g.refundCashUSD || 0);
        cardIQD += (g.depositCardIQD || 0) - (g.depositCarryCardIQD || 0) + (g.checkoutCardIQD || 0) - (g.refundCardIQD || 0);
    });
    (hotelData.reservationLog || []).filter(e => e.status !== 'cancelled').forEach(e => {
        cashIQD += e.depositCashIQD || 0;
        cashUSD += e.depositCashUSD || 0;
        cardIQD += e.depositCardIQD || 0;
    });
    return { cashIQD, cashUSD, cardIQD };
}

function updateDashboardStats() {
    const availableRooms = hotelData.rooms.filter(r => r.status === 'available').length;
    const occupiedRooms = hotelData.rooms.filter(r => r.status === 'occupied').length;
    const isReception = loggedInUser?.role === 'reception';

    const _set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    _set('availableRoomsCount', availableRooms);
    _set('occupiedRoomsCount', occupiedRooms);

    const setCardIcon = (iconId, bgId, cardId, iconClass, color, bg, borderColor) => {
        const icon = document.getElementById(iconId);
        if (icon) { icon.className = iconClass; icon.style.color = color; }
        const bgEl = document.getElementById(bgId);
        if (bgEl) bgEl.style.background = bg;
        const card = document.getElementById(cardId);
        if (card) card.style.borderLeftColor = borderColor;
    };

    const dashCard5 = document.getElementById('dashCard5');

    const adminOnlyCardIds = [
        'dashCashIQDCard','dashCashUSDCard','dashCardIQDCard',
        'dashOICashIQDCard','dashOICashUSDCard','dashOICardIQDCard',
        'dashPurchCashIQDCard','dashPurchUSDCard','dashPurchCardIQDCard'
    ];
    const cleaningCard = document.getElementById('dashCleaningCard');
    const fmt = d => new Date(d).toLocaleDateString();
    const lastOf = arr => arr.length ? arr[arr.length - 1] : null;

    if (isReception) {
        adminOnlyCardIds.forEach(id => { const el = document.getElementById(id); if (el) el.style.display = 'none'; });
        if (cleaningCard) cleaningCard.style.display = '';
        _set('dashCleaningCount', hotelData.rooms.filter(r => r.status === 'cleaning').length);
        if (dashCard5) dashCard5.style.display = 'none';
    } else {
        adminOnlyCardIds.forEach(id => { const el = document.getElementById(id); if (el) el.style.display = ''; });
        if (cleaningCard) cleaningCard.style.display = 'none';

        // ── Outside Income — per-currency resets ──
        const oiAllArr     = hotelData.outsideIncome || [];
        const oiAllCashIQD = oiAllArr.reduce((s, p) => s + (p.priceIQD     || 0), 0);
        const oiAllCashUSD = oiAllArr.reduce((s, p) => s + (p.priceUSD     || 0), 0);
        const oiAllCardIQD = oiAllArr.reduce((s, p) => s + (p.priceCardIQD || 0), 0);
        const oldOiLast    = lastOf(hotelData.outsideIncomeResets || []);
        const lastOiIQD    = lastOf(hotelData.oiResetsIQD     || []);
        const lastOiUSD    = lastOf(hotelData.oiResetsUSD     || []);
        const lastOiCard   = lastOf(hotelData.oiResetsCardIQD || []);
        const oiCashIQD = oiAllCashIQD - (lastOiIQD  ? lastOiIQD.value  : (oldOiLast ? oldOiLast.iqd          : 0));
        const oiCashUSD = oiAllCashUSD - (lastOiUSD  ? lastOiUSD.value  : (oldOiLast ? oldOiLast.usd          : 0));
        const oiCardIQD = oiAllCardIQD - (lastOiCard ? lastOiCard.value : (oldOiLast ? (oldOiLast.cardIQD || 0) : 0));
        _set('dashOICashIQDValue',  `IQD ${fmtIQD(oiCashIQD)}`);
        _set('dashOICashUSDValue',  `$${fmtUSD(oiCashUSD)}`);
        _set('dashOICardIQDValue',  `IQD ${fmtIQD(oiCardIQD)}`);
        const el_oiIS = document.getElementById('dashOICashIQDSince');  if (el_oiIS)  el_oiIS.textContent  = lastOiIQD  ? `Since ${fmt(lastOiIQD.resetAt)}`  : (oldOiLast ? `Since ${fmt(oldOiLast.resetAt)}` : 'All-time');
        const el_oiUS = document.getElementById('dashOICashUSDSince');  if (el_oiUS)  el_oiUS.textContent  = lastOiUSD  ? `Since ${fmt(lastOiUSD.resetAt)}`  : (oldOiLast ? `Since ${fmt(oldOiLast.resetAt)}` : 'All-time');
        const el_oiCS = document.getElementById('dashOICardIQDSince');  if (el_oiCS)  el_oiCS.textContent  = lastOiCard ? `Since ${fmt(lastOiCard.resetAt)}` : (oldOiLast ? `Since ${fmt(oldOiLast.resetAt)}` : 'All-time');

        // ── Purchases — per-currency resets ──
        const purchAllArr     = hotelData.purchases || [];
        const purchAllCashIQD = purchAllArr.reduce((s, p) => s + (p.priceIQD != null ? p.priceIQD : (p.price || 0)), 0);
        const purchAllCashUSD = purchAllArr.reduce((s, p) => s + (p.priceUSD     || 0), 0);
        const purchAllCardIQD = purchAllArr.reduce((s, p) => s + (p.priceCardIQD || 0), 0);
        const oldPurchLast    = lastOf(hotelData.purchasesResets || []);
        const lastPurchIQD    = lastOf(hotelData.purchResetsIQD     || []);
        const lastPurchUSD    = lastOf(hotelData.purchResetsUSD     || []);
        const lastPurchCard   = lastOf(hotelData.purchResetsCardIQD || []);
        const purchCashIQD = purchAllCashIQD - (lastPurchIQD  ? lastPurchIQD.value  : (oldPurchLast ? (oldPurchLast.cashIQD || 0) : 0));
        const purchCashUSD = purchAllCashUSD - (lastPurchUSD  ? lastPurchUSD.value  : (oldPurchLast ? oldPurchLast.usd          : 0));
        const purchCardIQD = purchAllCardIQD - (lastPurchCard ? lastPurchCard.value : (oldPurchLast ? (oldPurchLast.cardIQD || 0) : 0));
        _set('dashPurchCashIQDValue',  `IQD ${fmtIQD(purchCashIQD)}`);
        _set('dashPurchUSDValue',      `$${fmtUSD(purchCashUSD)}`);
        _set('dashPurchCardIQDValue',  `IQD ${fmtIQD(purchCardIQD)}`);
        const el_pIS = document.getElementById('dashPurchCashIQDSince'); if (el_pIS) el_pIS.textContent = lastPurchIQD  ? `Since ${fmt(lastPurchIQD.resetAt)}`  : (oldPurchLast ? `Since ${fmt(oldPurchLast.resetAt)}` : 'All-time');
        const el_pUS = document.getElementById('dashPurchUSDSince');     if (el_pUS) el_pUS.textContent = lastPurchUSD  ? `Since ${fmt(lastPurchUSD.resetAt)}`  : (oldPurchLast ? `Since ${fmt(oldPurchLast.resetAt)}` : 'All-time');
        const el_pCS = document.getElementById('dashPurchCardIQDSince'); if (el_pCS) el_pCS.textContent = lastPurchCard ? `Since ${fmt(lastPurchCard.resetAt)}` : (oldPurchLast ? `Since ${fmt(oldPurchLast.resetAt)}` : 'All-time');

        // ── Income — per-currency resets ──
        const all     = calculateTotalIncomeByMethod();
        const oldLast = lastOf(hotelData.incomeResets || []);
        const lastIQD  = lastOf(hotelData.incomeResetsIQD     || []);
        const lastUSD  = lastOf(hotelData.incomeResetsUSD     || []);
        const lastCard = lastOf(hotelData.incomeResetsCardIQD || []);
        const cashIQD  = all.cashIQD - (lastIQD  ? lastIQD.value  : (oldLast ? oldLast.cashIQD : 0));
        const cashUSD  = all.cashUSD - (lastUSD  ? lastUSD.value  : (oldLast ? oldLast.cashUSD : 0));
        const cardIQD  = all.cardIQD - (lastCard ? lastCard.value : (oldLast ? oldLast.cardIQD : 0));
        _set('dashCashIQDValue', `IQD ${fmtIQD(cashIQD)}`);
        _set('dashCashUSDValue', `$${fmtUSD(cashUSD)}`);
        _set('dashCardIQDValue', `IQD ${fmtIQD(cardIQD)}`);
        const el_iIS = document.getElementById('dashCashIQDSince');  if (el_iIS)  el_iIS.textContent  = lastIQD  ? `Since ${fmt(lastIQD.resetAt)}`  : (oldLast ? `Since ${fmt(oldLast.resetAt)}` : 'All-time');
        const el_iUS = document.getElementById('dashCashUSDSince');  if (el_iUS)  el_iUS.textContent  = lastUSD  ? `Since ${fmt(lastUSD.resetAt)}`  : (oldLast ? `Since ${fmt(oldLast.resetAt)}` : 'All-time');
        const el_iCS = document.getElementById('dashCardIQDSince');  if (el_iCS)  el_iCS.textContent  = lastCard ? `Since ${fmt(lastCard.resetAt)}` : (oldLast ? `Since ${fmt(oldLast.resetAt)}` : 'All-time');

        const checkoutCount = hotelData.rooms.filter(r => r.status === 'checkout').length;
        _set('checkoutRoomsCount', checkoutCount);
        if (dashCard5) dashCard5.style.display = '';
    }
}

function resetDashboardIncomeCashIQD() {
    if (!confirm('Reset the Cash IQD income counter to zero?\n\nAll data stays — only the display resets.')) return;
    const all = calculateTotalIncomeByMethod();
    if (!Array.isArray(hotelData.incomeResetsIQD)) hotelData.incomeResetsIQD = [];
    hotelData.incomeResetsIQD.push({ value: all.cashIQD, resetAt: new Date().toISOString(), resetBy: loggedInUser?.name || '—' });
    saveDataToStorage();
    updateDashboardStats();
    showToast('Cash IQD counter reset to zero.', 'success');
}

function resetDashboardIncomeCashUSD() {
    if (!confirm('Reset the Cash USD income counter to zero?\n\nAll data stays — only the display resets.')) return;
    const all = calculateTotalIncomeByMethod();
    if (!Array.isArray(hotelData.incomeResetsUSD)) hotelData.incomeResetsUSD = [];
    hotelData.incomeResetsUSD.push({ value: all.cashUSD, resetAt: new Date().toISOString(), resetBy: loggedInUser?.name || '—' });
    saveDataToStorage();
    updateDashboardStats();
    showToast('Cash USD counter reset to zero.', 'success');
}

function resetDashboardIncomeMasterCard() {
    if (!confirm('Reset the MasterCard IQD income counter to zero?\n\nAll data stays — only the display resets.')) return;
    const all = calculateTotalIncomeByMethod();
    if (!Array.isArray(hotelData.incomeResetsCardIQD)) hotelData.incomeResetsCardIQD = [];
    hotelData.incomeResetsCardIQD.push({ value: all.cardIQD, resetAt: new Date().toISOString(), resetBy: loggedInUser?.name || '—' });
    saveDataToStorage();
    updateDashboardStats();
    showToast('MasterCard IQD counter reset to zero.', 'success');
}

function resetDashOICashIQD() {
    if (!confirm('Reset the Outside Income Cash IQD counter to zero?\n\nAll data stays — only the display resets.')) return;
    const val = (hotelData.outsideIncome || []).reduce((s, p) => s + (p.priceIQD || 0), 0);
    if (!Array.isArray(hotelData.oiResetsIQD)) hotelData.oiResetsIQD = [];
    hotelData.oiResetsIQD.push({ value: val, resetAt: new Date().toISOString(), resetBy: loggedInUser?.name || '—' });
    saveDataToStorage(); updateDashboardStats();
    showToast('Outside Income Cash IQD counter reset to zero.', 'success');
}

function resetDashOICashUSD() {
    if (!confirm('Reset the Outside Income Cash USD counter to zero?\n\nAll data stays — only the display resets.')) return;
    const val = (hotelData.outsideIncome || []).reduce((s, p) => s + (p.priceUSD || 0), 0);
    if (!Array.isArray(hotelData.oiResetsUSD)) hotelData.oiResetsUSD = [];
    hotelData.oiResetsUSD.push({ value: val, resetAt: new Date().toISOString(), resetBy: loggedInUser?.name || '—' });
    saveDataToStorage(); updateDashboardStats();
    showToast('Outside Income Cash USD counter reset to zero.', 'success');
}

function resetDashOIMasterCard() {
    if (!confirm('Reset the Outside Income MasterCard IQD counter to zero?\n\nAll data stays — only the display resets.')) return;
    const val = (hotelData.outsideIncome || []).reduce((s, p) => s + (p.priceCardIQD || 0), 0);
    if (!Array.isArray(hotelData.oiResetsCardIQD)) hotelData.oiResetsCardIQD = [];
    hotelData.oiResetsCardIQD.push({ value: val, resetAt: new Date().toISOString(), resetBy: loggedInUser?.name || '—' });
    saveDataToStorage(); updateDashboardStats();
    showToast('Outside Income MasterCard IQD counter reset to zero.', 'success');
}

function resetDashPurchCashIQD() {
    if (!confirm('Reset the Purchases Cash IQD counter to zero?\n\nAll data stays — only the display resets.')) return;
    const val = (hotelData.purchases || []).reduce((s, p) => s + (p.priceIQD != null ? p.priceIQD : (p.price || 0)), 0);
    if (!Array.isArray(hotelData.purchResetsIQD)) hotelData.purchResetsIQD = [];
    hotelData.purchResetsIQD.push({ value: val, resetAt: new Date().toISOString(), resetBy: loggedInUser?.name || '—' });
    saveDataToStorage(); updateDashboardStats();
    showToast('Purchases Cash IQD counter reset to zero.', 'success');
}

function resetDashPurchCashUSD() {
    if (!confirm('Reset the Purchases Cash USD counter to zero?\n\nAll data stays — only the display resets.')) return;
    const val = (hotelData.purchases || []).reduce((s, p) => s + (p.priceUSD || 0), 0);
    if (!Array.isArray(hotelData.purchResetsUSD)) hotelData.purchResetsUSD = [];
    hotelData.purchResetsUSD.push({ value: val, resetAt: new Date().toISOString(), resetBy: loggedInUser?.name || '—' });
    saveDataToStorage(); updateDashboardStats();
    showToast('Purchases Cash USD counter reset to zero.', 'success');
}

function resetDashPurchMasterCard() {
    if (!confirm('Reset the Purchases MasterCard IQD counter to zero?\n\nAll data stays — only the display resets.')) return;
    const val = (hotelData.purchases || []).reduce((s, p) => s + (p.priceCardIQD || 0), 0);
    if (!Array.isArray(hotelData.purchResetsCardIQD)) hotelData.purchResetsCardIQD = [];
    hotelData.purchResetsCardIQD.push({ value: val, resetAt: new Date().toISOString(), resetBy: loggedInUser?.name || '—' });
    saveDataToStorage(); updateDashboardStats();
    showToast('Purchases MasterCard IQD counter reset to zero.', 'success');
}

function updateDashboardCharts() {
    const isReception = loggedInUser?.role === 'reception';
    const dailyCard = document.getElementById('dashDailyIncomeCard');
    const chartsRow = document.getElementById('dashChartsRow');
    if (dailyCard) dailyCard.style.display = isReception ? 'none' : '';
    if (chartsRow) chartsRow.style.gridTemplateColumns = isReception ? '1fr' : '';
    if (!isReception) updateDailyIncomeChart();
    updateRoomStatusChart();
}

function updateDailyIncomeChart() {
    const ctx = document.getElementById('dailyIncomeChart');
    if (!ctx) return;

    const dailyData = {};
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        dailyData[date.toLocaleDateString()] = 0;
    }

    hotelData.guests.forEach(guest => {
        const date = new Date(guest.checkedOutAt || guest.checkOut).toLocaleDateString();
        if (dailyData.hasOwnProperty(date)) {
            dailyData[date] += guest.totalSpent || 0;
        }
    });

    if (charts.dailyIncome) charts.dailyIncome.destroy();

    charts.dailyIncome = new window['Chart'](ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(dailyData),
            datasets: [{
                label: 'Daily Income',
                data: Object.values(dailyData),
                backgroundColor: '#667eea',
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: function(value) { return '$' + value; } }
                }
            }
        }
    });
}

function updateRoomStatusChart() {
    const ctx = document.getElementById('roomStatusChart');
    if (!ctx) return;

    const available = hotelData.rooms.filter(r => r.status === 'available').length;
    const occupied = hotelData.rooms.filter(r => r.status === 'occupied').length;
    const reserved = hotelData.rooms.filter(r => r.status === 'reserved').length;
    const cleaning = hotelData.rooms.filter(r => r.status === 'cleaning').length;
    const checkout = hotelData.rooms.filter(r => r.status === 'checkout').length;

    if (charts.roomStatus) charts.roomStatus.destroy();

    charts.roomStatus = new window['Chart'](ctx, {
        type: 'doughnut',
        data: {
            labels: ['Available', 'Occupied', 'Reserved', 'Cleaning', 'Checkout'],
            datasets: [{
                data: [available, occupied, reserved, cleaning, checkout],
                backgroundColor: ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#dc2626'],
                borderColor: '#fff',
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { padding: 15, font: { size: 12 } }
                }
            }
        }
    });
}

function updateRecentActivities() {
    const table = document.getElementById('recentActivitiesTable');
    table.innerHTML = '';

    const recentActs = hotelData.activities.slice(-10).reverse();

    if (recentActs.length === 0) {
        table.innerHTML = `<tr><td colspan="6" class="text-center text-gray-500 py-8">${t('no_recent')}</td></tr>`;
        return;
    }

    const locale = currentLang === 'ar' ? 'ar-IQ' : 'en-US';
    recentActs.forEach(activity => {
        const row = document.createElement('tr');
        const roleLabel = activity.userRole ? (t('role_' + activity.userRole) || activity.userRole) : '-';
        row.innerHTML = `
            <td>${activity.timestamp ? new Date(activity.timestamp).toLocaleString(locale) : '-'}</td>
            <td>${activity.description || '-'}</td>
            <td>${activity.roomNumber || '-'}</td>
            <td>${activity.userName || '-'}</td>
            <td>${roleLabel}</td>
            <td>${activity.amount != null ? activity.amount : '-'}</td>
        `;
        table.appendChild(row);
    });
}

// ==================== SETTINGS ====================
function loadSettingsPage() {
    loadUsersSection();

    const bulkTypeEl = document.getElementById('bulkRoomType');
    if (bulkTypeEl) {
        bulkTypeEl.innerHTML = (hotelData.settings.roomTypes || ['Single', 'Double', 'Suite', 'Deluxe'])
            .map(tp => `<option value="${tp}">${tp}</option>`).join('');
    }

    const rateEl = document.getElementById('settingsExchangeRate');
    if (rateEl) rateEl.value = Math.round(hotelData.settings.exchangeRate || 1500).toLocaleString('en-US');

    const cutoffEl = document.getElementById('settingsCheckoutCutoffHour');
    if (cutoffEl) {
        const fmtHour = h => { const d = new Date(2000,0,1,h,0,0); return d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }); };
        if (!cutoffEl.options.length) {
            for (let h = 0; h < 24; h++) {
                const opt = document.createElement('option');
                opt.value = h; opt.textContent = fmtHour(h);
                cutoffEl.appendChild(opt);
            }
        }
        cutoffEl.value = hotelData.settings.checkoutCutoffHour ?? 13;
    }

    const serviceContainer = document.getElementById('serviceCategories');
    if (serviceContainer) {
        serviceContainer.innerHTML = '';
        (hotelData.settings.serviceCategories || []).forEach((cat, i) => {
            const enVal = typeof cat === 'object' ? (cat.en || '') : cat;
            const arVal = typeof cat === 'object' ? (cat.ar || '') : '';
            const div = document.createElement('div');
            div.className = 'flex gap-2 mb-2 items-center';
            div.innerHTML = `
                <input type="text" data-cat-en="${i}" value="${enVal}"
                    class="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500" placeholder="English">
                <input type="text" data-cat-ar="${i}" value="${arVal}" dir="rtl"
                    class="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500" placeholder="عربي">
                <button type="button" onclick="removeServiceCategory(${i})" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button>`;
            serviceContainer.appendChild(div);
        });
    }

    const pmContainer = document.getElementById('paymentMethodItems');
    if (pmContainer) {
        pmContainer.innerHTML = '';
        (hotelData.settings.paymentMethods || []).forEach((method, i) => {
            const div = document.createElement('div');
            div.className = 'flex gap-2 mb-2 items-center';
            div.innerHTML = `
                <input type="text" value="${method}" onchange="hotelData.settings.paymentMethods[${i}]=this.value"
                    class="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Payment method name">
                <button type="button" onclick="removePaymentMethod(${i})" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button>`;
            pmContainer.appendChild(div);
        });
    }

    const rtContainer = document.getElementById('roomTypeItems');
    rtContainer.innerHTML = '';
    (hotelData.settings.roomTypes || []).forEach((type, i) => {
        const div = document.createElement('div');
        div.className = 'flex gap-2 mb-2 items-center';
        div.innerHTML = `
            <input type="text" value="${type}" onchange="hotelData.settings.roomTypes[${i}]=this.value"
                class="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Room type name">
            <button type="button" onclick="removeRoomType(${i})" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button>`;
        rtContainer.appendChild(div);
    });
}

function addServiceCategory() {
    if (!hotelData.settings.serviceCategories) hotelData.settings.serviceCategories = [];
    hotelData.settings.serviceCategories.push({ en: '', ar: '' });
    saveDataToStorage();
    loadSettingsPage();
}

function removeServiceCategory(index) {
    hotelData.settings.serviceCategories.splice(index, 1);
    saveDataToStorage();
    loadSettingsPage();
}

function saveSettings() {
    if (!requireOnline()) return;
    const rateEl = document.getElementById('settingsExchangeRate');
    if (rateEl) {
        const rate = parseFloat((rateEl.value || '').replace(/,/g, '')) || 0;
        if (rate > 0) hotelData.settings.exchangeRate = rate;
    }

    const cutoffEl = document.getElementById('settingsCheckoutCutoffHour');
    if (cutoffEl && cutoffEl.value !== '') hotelData.settings.checkoutCutoffHour = parseInt(cutoffEl.value);

    // Read edited category names from DOM inputs
    const catRows = document.querySelectorAll('#serviceCategories > div');
    hotelData.settings.serviceCategories = Array.from(catRows).map(row => {
        const enInp = row.querySelector('[data-cat-en]');
        const arInp = row.querySelector('[data-cat-ar]');
        return { en: enInp ? enInp.value.trim() : '', ar: arInp ? arInp.value.trim() : '' };
    }).filter(c => c.en || c.ar);

    // Read edited room types from DOM inputs
    const rtInputs = document.querySelectorAll('#roomTypeItems input[type="text"]');
    hotelData.settings.roomTypes = Array.from(rtInputs).map(inp => inp.value.trim()).filter(v => v);

    // Read edited payment methods from DOM inputs
    const pmInputs = document.querySelectorAll('#paymentMethodItems input[type="text"]');
    if (pmInputs.length > 0) {
        hotelData.settings.paymentMethods = Array.from(pmInputs).map(inp => inp.value.trim()).filter(v => v);
    }

    // Sync any label/color edits typed directly into inputs before saving
    const rsRows = document.querySelectorAll('#roomStatusItems > div');
    rsRows.forEach((row, i) => {
        if (!hotelData.settings.roomStatuses[i]) return;
        const labelInp = row.querySelector('input[type="text"]');
        const colorInp = row.querySelector('input[type="color"]');
        const bookInp  = row.querySelector('input[type="checkbox"]');
        if (labelInp) hotelData.settings.roomStatuses[i].label   = labelInp.value.trim() || hotelData.settings.roomStatuses[i].label;
        if (colorInp) hotelData.settings.roomStatuses[i].color   = colorInp.value;
        if (bookInp)  hotelData.settings.roomStatuses[i].bookable = bookInp.checked;
    });

    saveDataToStorage();
    showToast(t('toast_settings_saved'), 'success');
    // Refresh user display name in case role changed
    applyRoleUI();
}

function addServiceItem() {
    hotelData.settings.serviceItems.push({ id: Date.now(), name: 'New Service', price: 0 });
    saveDataToStorage();
    loadSettingsPage();
}

function addPaymentMethod() {
    if (!hotelData.settings.paymentMethods) hotelData.settings.paymentMethods = [];
    hotelData.settings.paymentMethods.push('New Method');
    saveDataToStorage();
    loadSettingsPage();
}

function removePaymentMethod(index) {
    hotelData.settings.paymentMethods.splice(index, 1);
    saveDataToStorage();
    loadSettingsPage();
}

function addRoomType() {
    if (!hotelData.settings.roomTypes) hotelData.settings.roomTypes = [];
    hotelData.settings.roomTypes.push('New Type');
    saveDataToStorage();
    loadSettingsPage();
}

function removeRoomType(index) {
    hotelData.settings.roomTypes.splice(index, 1);
    saveDataToStorage();
    loadSettingsPage();
}

// ==================== CLEANER VIEW ====================
function loadCleanerPage() {
    const grid = document.getElementById('cleanerRoomsGrid');
    if (!grid) return;

    const cleanerStatuses = getCleanerStatuses(); // non-system statuses the cleaner can set

    // Summary stats bar — one card per unique status currently on rooms
    const summary = document.getElementById('cleanerSummary');
    if (summary) {
        const allStatusIds = [...new Set(hotelData.rooms.map(r => r.status))];
        summary.innerHTML = allStatusIds.map(sid => {
            const cfg = getStatusConfig(sid);
            const count = hotelData.rooms.filter(r => r.status === sid).length;
            return `<div style="background:${cfg.color};border-radius:16px;padding:16px 18px;color:white;display:flex;align-items:center;gap:12px;box-shadow:0 4px 14px ${cfg.color}55;">
                <i class="fas ${getStatusIcon(sid)}" style="font-size:1.7em;opacity:0.85;"></i>
                <div>
                    <div style="font-size:1.8rem;font-weight:800;line-height:1;">${count}</div>
                    <div style="font-size:0.78rem;opacity:0.9;font-weight:600;margin-top:2px;">${cfg.label}</div>
                </div>
            </div>`;
        }).join('');
    }

    // Floor filter
    const floorEl = document.getElementById('cleanerFloorFilter');
    const statusEl = document.getElementById('cleanerStatusFilter');
    if (floorEl) {
        const curFloor = floorEl.value;
        const floors = [...new Set(hotelData.rooms.map(r => r.floor))].sort((a,b) => a-b);
        floorEl.innerHTML = `<option value="all">${t('all_floors')}</option>` +
            floors.map(f => `<option value="${f}" ${String(f)===curFloor?'selected':''}>${t('floor_prefix')} ${f}</option>`).join('');
    }
    if (statusEl) {
        const curStat = statusEl.value || 'all';
        const allSt = [...new Set(hotelData.rooms.map(r => r.status))];
        statusEl.innerHTML = `<option value="all">${t('all_status')}</option>` +
            allSt.map(sid => `<option value="${sid}" ${sid===curStat?'selected':''}>${getStatusConfig(sid).label}</option>`).join('');
    }

    // Filter rooms
    const selFloor = floorEl?.value || 'all';
    const selStatus = statusEl?.value || 'all';
    let rooms = hotelData.rooms;
    if (selFloor !== 'all') rooms = rooms.filter(r => String(r.floor) === selFloor);
    if (selStatus !== 'all') rooms = rooms.filter(r => r.status === selStatus);

    if (rooms.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#9ca3af;">${t('no_data')}</div>`;
        return;
    }

    grid.innerHTML = rooms.map(room => {
        const cfg  = getStatusConfig(room.status);
        const icon = getStatusIcon(room.status);
        // Cleaner dropdown — only non-system statuses
        const opts = cleanerStatuses.map(s =>
            `<option value="${s.id}" ${room.status === s.id ? 'selected' : ''}>${s.label}</option>`
        ).join('');
        const guestLine = room.currentGuest
            ? `<div style="font-size:0.75rem;color:white;opacity:0.75;margin-top:2px;"><i class="fas fa-user" style="margin-right:4px;"></i>${room.currentGuest.name || ''}</div>`
            : '';
        return `<div style="background:white;border-radius:18px;overflow:hidden;box-shadow:0 6px 20px rgba(0,0,0,0.1);transition:transform 0.2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform=''">
            <div style="background:${cfg.color};padding:20px 18px;display:flex;align-items:center;justify-content:space-between;">
                <div>
                    <div style="color:white;font-size:1.25rem;font-weight:800;line-height:1.2;">${t('room_prefix')} ${room.number}</div>
                    <div style="color:rgba(255,255,255,0.8);font-size:0.78rem;margin-top:3px;">${t('floor_prefix')} ${room.floor} &nbsp;·&nbsp; ${room.type}</div>
                    ${guestLine}
                </div>
                <i class="fas ${icon}" style="color:rgba(255,255,255,0.5);font-size:2.2em;"></i>
            </div>
            <div style="padding:14px 16px;background:#f9fafb;">
                <div style="font-size:0.72rem;color:#9ca3af;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">${t('change_status_label')}</div>
                <select onchange="updateRoomCleaning(${room.id}, this.value)"
                    style="width:100%;padding:10px 14px;border:2px solid ${cfg.color}66;border-radius:10px;font-size:0.9rem;font-weight:600;color:#374151;background:white;cursor:pointer;outline:none;">
                    ${opts}
                </select>
            </div>
        </div>`;
    }).join('');
}

function updateRoomCleaning(roomId, newStatus) {
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room) return;
    // A room that still has currentGuest set was sent for cleaning mid-stay (e.g. reception marked
    // an occupied room "Cleaning" so housekeeping could tidy it) — real checkouts always clear
    // currentGuest first, before the room ever reaches "cleaning". So if a guest is still attached,
    // finishing the clean must restore "occupied" with that same guest/deposit/services intact,
    // never "available" — otherwise reception would see the room as empty and could double-book it
    // out from under the guest who's still there.
    if (newStatus === 'available' && room.currentGuest) {
        newStatus = 'occupied';
    }
    room.status = newStatus;
    saveDataToStorage();
    showToast(t('toast_status_updated'), 'success');
    loadCleanerPage();
}

// ==================== RESERVATION SYSTEM ====================
let _reservingRoomId = null;

function openReserveModal(roomId) {
    _reservingRoomId = roomId;
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room) return;
    const info = document.getElementById('reserveRoomInfo');
    if (info) {
        info.innerHTML = `<b>${t('room_prefix')} ${room.number}</b> &nbsp;·&nbsp; ${room.type} &nbsp;·&nbsp; ${t('floor_prefix')} ${room.floor}
            <span style="float:${currentLang==='ar'?'left':'right'};font-weight:700;color:#667eea;">$${room.price}/${t('per_night')}</span>`;
    }
    // Pre-fill price — room.price is denominated in USD
    const priceUSDEl = document.getElementById('reservePriceUSD');
    if (priceUSDEl) priceUSDEl.value = room.price;
    const priceIQDEl = document.getElementById('reservePriceIQD');
    if (priceIQDEl) priceIQDEl.value = '';
    // Set default arrival to now (local time)
    const arrEl = document.getElementById('reserveArrivalDate');
    if (arrEl) {
        const now = new Date();
        const pad = n => String(n).padStart(2, '0');
        arrEl.value = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
    }
    // Populate payment methods
    const pmEl = document.getElementById('reservePaymentMethod');
    if (pmEl) {
        const methods = hotelData.settings.paymentMethods || ['Cash', 'Card', 'Bank Transfer'];
        pmEl.innerHTML = '<option value="">Select payment method</option>' +
            methods.map(m => `<option value="${m}">${m}</option>`).join('');
    }
    document.getElementById('reserveGuestName').value = '';
    document.getElementById('reservePhone').value = '';
    const notesEl = document.getElementById('reserveNotes');
    if (notesEl) notesEl.value = '';
    ['reserveDepositCashIQD','reserveDepositCashUSD','reserveDepositCardIQD','reserveDepositCardUSD'].forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.value = ''; el.disabled = false; el.style.opacity = '1'; el.style.cursor = ''; }
    });
    document.getElementById('reserveModalForm').style.display = '';
    document.getElementById('reserveModalSuccess').style.display = 'none';
    openModal('reserveModal');
}

function lockReserveCurrency() { /* replaced by lockDepositField */ }

function resetReserveCurrencyLock() {
    ['reserveDepositCashIQD','reserveDepositCashUSD','reserveDepositCardIQD','reserveDepositCardUSD'].forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.disabled = false; el.style.opacity = '1'; el.style.cursor = ''; }
    });
}

function confirmReservation(e) {
    e.preventDefault();
    if (!requireOnline()) return;
    const room = hotelData.rooms.find(r => r.id === _reservingRoomId);
    if (!room) return;
    const depositCashIQD = parseFloat((document.getElementById('reserveDepositCashIQD')?.value || '').replace(/,/g, '')) || 0;
    const depositCashUSD = parseFloat(document.getElementById('reserveDepositCashUSD')?.value) || 0;
    const depositCardIQD = parseFloat((document.getElementById('reserveDepositCardIQD')?.value || '').replace(/,/g, '')) || 0;
    const depositCardUSD = parseFloat(document.getElementById('reserveDepositCardUSD')?.value) || 0;
    const depositIQD = depositCashIQD + depositCardIQD;
    const depositUSD = depositCashUSD + depositCardUSD;
    const paymentMethod = document.getElementById('reservePaymentMethod')?.value || '';
    const notes = (document.getElementById('reserveNotes')?.value || '').trim();
    const priceIQD = parseFloat((document.getElementById('reservePriceIQD')?.value || '').replace(/,/g, '')) || 0;
    const priceUSD = parseFloat(document.getElementById('reservePriceUSD')?.value) || 0;
    const ri = {
        guestName:   document.getElementById('reserveGuestName').value.trim(),
        phone:       document.getElementById('reservePhone').value.trim(),
        arrivalDate: document.getElementById('reserveArrivalDate').value,
        priceIQD, priceUSD,
        price:       priceUSD || priceIQD || room.price, // legacy single-currency fallback
        depositCashIQD, depositCashUSD, depositCardIQD, depositCardUSD,
        depositIQD, depositUSD,
        paymentMethod,
        notes,
        createdAt:   new Date().toISOString()
    };
    room.status = 'reserved';
    room.reservationInfo = ri;
    if (!hotelData.reservationLog) hotelData.reservationLog = [];
    hotelData.reservationLog.push({
        id: Date.now(),
        roomId: room.id,
        roomNumber: room.number,
        roomType: room.type,
        guestName: ri.guestName,
        phone: ri.phone,
        arrivalDate: ri.arrivalDate,
        depositCashIQD, depositCashUSD, depositCardIQD, depositCardUSD,
        depositIQD, depositUSD,
        paymentMethod: ri.paymentMethod,
        notes,
        reservedAt: new Date().toISOString(),
        reservedBy: loggedInUser?.name || '—',
        status: 'active',
        cancelledAt: null
    });
    saveDataToStorage();
    updateNotificationBell();
    addActivity(`Room ${room.number} reserved for ${ri.guestName}`);
    showToast(t('toast_room_reserved'), 'success');
    loadCheckInPage();

    const arrStr = ri.arrivalDate ? new Date(ri.arrivalDate).toLocaleString() : '—';
    const parts = [];
    if (depositIQD > 0) parts.push(`IQD ${fmtIQD(depositIQD)}`);
    if (depositUSD > 0) parts.push(`$${depositUSD.toFixed(2)}`);
    const depositLine = parts.length ? ` · Deposit: ${parts.join(' + ')}` : '';
    const paymentLine = paymentMethod ? ` · Payment: ${paymentMethod}` : '';
    document.getElementById('reserveSuccessMsg').textContent =
        `${ri.guestName} — ${t('room_prefix')} ${room.number} · ${t('arrives') || 'Arrival'}: ${arrStr}${depositLine}${paymentLine}`;
    document.getElementById('reserveModalForm').style.display = 'none';
    document.getElementById('reserveModalSuccess').style.display = '';
}

function cancelReservation(roomId) {
    if (!requireOnline()) return;
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room) return;
    if (!hotelData.reservationLog) hotelData.reservationLog = [];

    const logEntry = hotelData.reservationLog.find(e => e.roomId === roomId && e.status === 'active');
    if (logEntry) {
        logEntry.status = 'cancelled';
        logEntry.cancelledAt = new Date().toISOString();
    } else if (room.reservationInfo) {
        // Reservation was made before logging existed — create the entry now as already-cancelled
        const ri = room.reservationInfo;
        hotelData.reservationLog.push({
            id: Date.now(),
            roomId: room.id,
            roomNumber: room.number,
            roomType: room.type,
            guestName: ri.guestName,
            phone: ri.phone || '',
            arrivalDate: ri.arrivalDate,
            depositIQD: ri.depositIQD || ri.deposit || 0,
            depositUSD: ri.depositUSD || 0,
            reservedAt: ri.createdAt || new Date().toISOString(),
            status: 'cancelled',
            cancelledAt: new Date().toISOString()
        });
    }

    const bookable = (hotelData.settings.roomStatuses || []).find(s => s.bookable);
    room.status = bookable ? bookable.id : 'available';
    room.reservationInfo = null;
    saveDataToStorage();
    updateNotificationBell();
    showToast(t('toast_reservation_cancelled'), 'success');
    loadCheckInPage();
}

let _changingRoomId = null;
let _changingRoomMode = null; // 'reservation' or 'guest'

function openChangeRoomModal(roomId) {
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room) return;
    const isGuestMove = !!(room.currentGuest && room.status === 'occupied');
    if (!isGuestMove && !room.reservationInfo) return;

    _changingRoomId = roomId;
    _changingRoomMode = isGuestMove ? 'guest' : 'reservation';

    const candidates = hotelData.rooms.filter(r => r.id !== roomId && getStatusConfig(r.status).bookable);
    const select = document.getElementById('changeRoomSelect');
    if (!candidates.length) {
        select.innerHTML = `<option value="">${t('err_no_other_rooms') || 'No other available rooms to move this reservation to.'}</option>`;
    } else {
        select.innerHTML = candidates
            .map(r => `<option value="${r.id}">${t('room_prefix')} ${r.number} — ${r.type} — $${r.price}/${t('per_night')}</option>`)
            .join('');
    }

    const info = document.getElementById('changeRoomCurrentInfo');
    if (info) {
        const guestName = isGuestMove ? room.currentGuest.name : room.reservationInfo.guestName;
        const label = isGuestMove ? (t('guest_label') || 'Guest') : t('reserved_for');
        info.innerHTML = `<b>${label}:</b> ${guestName} &nbsp;·&nbsp; ${t('room_prefix')} ${room.number} → ?`;
    }

    openModal('changeRoomModal');
}

function confirmChangeRoom() {
    if (!requireOnline()) return;
    const oldRoom = hotelData.rooms.find(r => r.id === _changingRoomId);
    if (!oldRoom) return;

    const newRoomId = parseInt(document.getElementById('changeRoomSelect')?.value);
    if (!newRoomId) { showToast(t('err_select_room'), 'error'); return; }
    const newRoom = hotelData.rooms.find(r => r.id === newRoomId);
    if (!newRoom) { showToast(t('err_select_room'), 'error'); return; }

    if (_changingRoomMode === 'guest') {
        if (!oldRoom.currentGuest) return;
        const guest = hotelData.guests.find(g => g.id === oldRoom.currentGuest.id);
        if (!guest) return;

        guest.roomId = newRoom.id;
        newRoom.currentGuest = { name: guest.name, id: guest.id };
        newRoom.status = 'occupied';

        // The vacated room needs cleaning, same as a normal checkout — but keep/restore any
        // pending reservation info so reception doesn't lose track of it (same as checkout flow).
        if (oldRoom.isTemporary && oldRoom.savedReservation) {
            oldRoom.reservationInfo = { ...oldRoom.savedReservation };
            oldRoom.isTemporary = false;
            oldRoom.savedReservation = null;
        }
        oldRoom.status = 'checkout';
        oldRoom.currentGuest = null;

        saveDataToStorage();
        addActivity(`Guest ${guest.name} moved from Room ${oldRoom.number} to Room ${newRoom.number}`);
        showToast(t('toast_room_changed'), 'success');
        closeModal('changeRoomModal');
        loadCheckInPage();
        populateOccupiedRooms();
        return;
    }

    if (!oldRoom.reservationInfo) return;
    const ri = { ...oldRoom.reservationInfo };
    newRoom.reservationInfo = ri;
    newRoom.status = 'reserved';

    const bookable = (hotelData.settings.roomStatuses || []).find(s => s.bookable);
    oldRoom.status = bookable ? bookable.id : 'available';
    oldRoom.reservationInfo = null;

    if (!hotelData.reservationLog) hotelData.reservationLog = [];
    const logEntry = hotelData.reservationLog.find(e => e.roomId === oldRoom.id && e.status === 'active');
    if (logEntry) {
        logEntry.roomId = newRoom.id;
        logEntry.roomNumber = newRoom.number;
        logEntry.roomType = newRoom.type;
    }

    saveDataToStorage();
    updateNotificationBell();
    addActivity(`Reservation for ${ri.guestName} moved from Room ${oldRoom.number} to Room ${newRoom.number}`);
    showToast(t('toast_room_changed'), 'success');
    closeModal('changeRoomModal');
    loadCheckInPage();
}

let _addDepositRoomId = null;

// Adds an extra deposit/advance on top of what a guest already paid at check-in (e.g. they
// extend their stay mid-way and pay another advance). Tracked with its own timestamp/staff so
// the Shift Report can credit it to whoever actually collected it, not just whoever checked the guest in.
function openAddDepositModal(roomId) {
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room || !room.currentGuest) return;
    const guest = hotelData.guests.find(g => g.id === room.currentGuest.id);
    if (!guest) return;
    _addDepositRoomId = roomId;

    ['addDepositCashIQD', 'addDepositCashUSD', 'addDepositCardIQD', 'addDepositNotes'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });

    const info = document.getElementById('addDepositCurrentInfo');
    if (info) {
        const parts = [];
        if ((guest.depositCashIQD||0) > 0) parts.push(`${t('lbl_cash')||'Cash'} IQD ${fmtIQD(guest.depositCashIQD)}`);
        if ((guest.depositCashUSD||0) > 0) parts.push(`${t('lbl_cash')||'Cash'} $${guest.depositCashUSD.toFixed(2)}`);
        if ((guest.depositCardIQD||0) > 0) parts.push(`${t('lbl_mastercard')||'MasterCard'} IQD ${fmtIQD(guest.depositCardIQD)}`);
        info.innerHTML = `<b>${guest.name}</b> &nbsp;·&nbsp; ${t('room_prefix')} ${room.number}<br>
            <span style="color:#6b7280;">${t('lbl_deposit_so_far')||'Deposit paid so far'}: ${parts.length ? parts.join(' + ') : '—'}</span>`;
    }

    openModal('addDepositModal');
}

function confirmAddDeposit() {
    if (!requireOnline()) return;
    const room = hotelData.rooms.find(r => r.id === _addDepositRoomId);
    if (!room || !room.currentGuest) return;
    const guest = hotelData.guests.find(g => g.id === room.currentGuest.id);
    if (!guest) return;

    const cashIQD = parseFloat((document.getElementById('addDepositCashIQD')?.value || '').replace(/,/g, '')) || 0;
    const cashUSD = parseFloat(document.getElementById('addDepositCashUSD')?.value) || 0;
    const cardIQD = parseFloat((document.getElementById('addDepositCardIQD')?.value || '').replace(/,/g, '')) || 0;
    const notes   = (document.getElementById('addDepositNotes')?.value || '').trim();

    if (cashIQD <= 0 && cashUSD <= 0 && cardIQD <= 0) {
        showToast(t('err_enter_amount') || 'Enter at least one amount.', 'error');
        return;
    }

    guest.depositCashIQD = (guest.depositCashIQD || 0) + cashIQD;
    guest.depositCashUSD = (guest.depositCashUSD || 0) + cashUSD;
    guest.depositCardIQD = (guest.depositCardIQD || 0) + cardIQD;
    guest.depositIQD = guest.depositCashIQD + guest.depositCardIQD;
    guest.depositUSD = guest.depositCashUSD + (guest.depositCardUSD || 0);

    if (!Array.isArray(guest.depositLog)) guest.depositLog = [];
    guest.depositLog.push({
        cashIQD, cashUSD, cardIQD, notes,
        addedAt: new Date().toISOString(),
        addedBy: loggedInUser?.name || '—'
    });

    const parts = [];
    if (cashIQD > 0) parts.push(`IQD ${fmtIQD(cashIQD)}`);
    if (cashUSD > 0) parts.push(`$${cashUSD.toFixed(2)}`);
    if (cardIQD > 0) parts.push(`MasterCard IQD ${fmtIQD(cardIQD)}`);
    addActivity(`Additional deposit of ${parts.join(' + ')} added for ${guest.name} — Room ${room.number}`);
    saveDataToStorage();
    showToast(t('toast_deposit_added') || 'Deposit added successfully!', 'success');
    closeModal('addDepositModal');
    loadCheckInPage();
    // If this room's checkout form is open elsewhere, refresh it too — otherwise it keeps showing
    // the pre-top-up deposit/balance until the staff re-clicks the room in the checkout list.
    if (_currentCheckoutRoomId === room.id) loadCheckOutForm(room.id);
}

function openCheckInFromReservation(roomId) {
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room || !room.reservationInfo) return;
    const ri = room.reservationInfo;
    openCheckInModal(roomId);
    if (ri.guestName) document.getElementById('guestName').value = ri.guestName;
    if (ri.phone)     document.getElementById('guestPhone').value = ri.phone;
    if (ri.priceIQD || ri.priceUSD || ri.price) {
        resetPriceFields();
        if (ri.priceIQD > 0) {
            document.getElementById('basePriceIQD').value = Math.round(ri.priceIQD).toLocaleString('en-US');
            document.getElementById('basePriceUSD').value = '';
            lockOtherPriceField('basePriceIQD', 'basePriceUSD');
        } else {
            document.getElementById('basePriceUSD').value = ri.priceUSD || ri.price;
            document.getElementById('basePriceIQD').value = '';
            lockOtherPriceField('basePriceUSD', 'basePriceIQD');
        }
    }

    // Pre-fill deposit fields from the reservation
    const cashIQDEl = document.getElementById('checkInDepositCashIQD');
    if (cashIQDEl && ri.depositCashIQD) cashIQDEl.value = Math.round(ri.depositCashIQD).toLocaleString('en-US');
    const cashUSDEl = document.getElementById('checkInDepositCashUSD');
    if (cashUSDEl && ri.depositCashUSD) cashUSDEl.value = ri.depositCashUSD;
    const cardIQDEl = document.getElementById('checkInDepositCardIQD');
    if (cardIQDEl && ri.depositCardIQD) cardIQDEl.value = Math.round(ri.depositCardIQD).toLocaleString('en-US');

    // Pre-fill notes from the reservation
    const notesEl = document.getElementById('checkInNotes');
    if (notesEl && ri.notes) notesEl.value = ri.notes;

    calculateTotalPrice();
}

// ==================== USER MANAGEMENT ====================
function loadUsersSection() {
    const container = document.getElementById('usersContainer');
    if (!container) return;

    // Self-heal automatically: if the visible list looks empty (e.g. an old reset wiped it before
    // resetToProduction started rebuilding it on every run), pull every account straight from the
    // `users/{uid}` path that sign-in actually relies on — no button needed, this just fixes itself
    // the next time Settings is opened.
    if ((!hotelData.users || !hotelData.users.length) && window.fbDb) {
        window.fbDb.ref('users').once('value').then(snap => {
            const accounts = snap.val() || {};
            const rebuilt = Object.keys(accounts).map(uid => ({ uid, ...accounts[uid] }));
            if (rebuilt.length) {
                hotelData.users = rebuilt;
                saveDataToStorage();
                loadUsersSection();
            }
        }).catch(() => {});
    }

    container.innerHTML = '';
    (hotelData.users || []).forEach((user, i) => {
        const isSelf = loggedInUser && (user.uid === loggedInUser.uid || user.email === loggedInUser.email);
        const div = document.createElement('div');
        div.style.cssText = 'display:flex;gap:8px;margin-bottom:10px;align-items:center;flex-wrap:wrap;padding:10px;background:#f9fafb;border-radius:10px;';
        div.innerHTML = `
            <input type="text" value="${user.name}" placeholder="Name"
                style="flex:1;min-width:120px;" class="px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                onchange="updateUserField(${i},'name',this.value)">
            <span style="flex:2;min-width:160px;padding:10px 12px;background:#f3f4f6;border-radius:8px;font-size:0.9rem;color:#6b7280;">${user.email}</span>
            <select style="min-width:120px;" class="px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                onchange="updateUserField(${i},'role',this.value)">
                <option value="admin" ${user.role==='admin'?'selected':''}>Admin</option>
                <option value="reception" ${user.role==='reception'?'selected':''}>Reception</option>
                <option value="cleaner" ${user.role==='cleaner'?'selected':''}>Cleaner</option>
            </select>
            <button type="button" onclick="sendPasswordReset('${user.email}')" class="btn btn-secondary btn-sm" title="Send password reset email">
                <i class="fas fa-key"></i>
            </button>
            ${isSelf ? '' : `<button type="button" onclick="removeUser(${i})" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button>`}`;
        container.appendChild(div);
    });

    loadStatusesSection();
}

function loadStatusesSection() {
    const container = document.getElementById('roomStatusItems');
    if (!container) return;
    container.innerHTML = '';
    (hotelData.settings.roomStatuses || []).forEach((st, i) => {
        const div = document.createElement('div');
        div.style.cssText = 'display:flex;gap:8px;margin-bottom:10px;align-items:center;flex-wrap:wrap;';
        div.innerHTML = `
            <input type="text" value="${st.label}" placeholder="Label"
                style="flex:1;min-width:120px;" class="px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                onchange="hotelData.settings.roomStatuses[${i}].label=this.value">
            <input type="color" value="${st.color}"
                style="width:44px;height:44px;padding:2px;border:2px solid #e5e7eb;border-radius:8px;cursor:pointer;"
                onchange="hotelData.settings.roomStatuses[${i}].color=this.value">
            <label style="display:flex;align-items:center;gap:6px;font-size:0.85rem;color:#374151;cursor:pointer;white-space:nowrap;">
                <input type="checkbox" ${st.bookable ? 'checked' : ''}
                    onchange="hotelData.settings.roomStatuses[${i}].bookable=this.checked"
                    style="width:16px;height:16px;cursor:pointer;">
                Bookable
            </label>
            ${st.system
                ? `<span style="font-size:0.72rem;font-weight:700;padding:3px 8px;border-radius:9999px;background:#e5e7eb;color:#6b7280;">SYSTEM</span>`
                : `<button type="button" onclick="removeRoomStatus(${i})" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button>`
            }`;
        container.appendChild(div);
    });
}

function addUser() {
    document.getElementById('newUserName').value = '';
    document.getElementById('newUserEmail').value = '';
    document.getElementById('newUserPassword').value = '';
    document.getElementById('newUserRole').value = 'reception';
    document.getElementById('addUserError').style.display = 'none';
    openModal('addUserModal');
}

function handleAddUserSubmit(e) {
    e.preventDefault();
    const name     = document.getElementById('newUserName').value.trim();
    const email    = document.getElementById('newUserEmail').value.trim();
    const password = document.getElementById('newUserPassword').value;
    const role     = document.getElementById('newUserRole').value;
    const errEl    = document.getElementById('addUserError');
    const btn      = document.getElementById('addUserBtn');
    errEl.style.display = 'none';
    btn.disabled = true;

    const secondApp = firebase.initializeApp(firebase.app().options, 'addUser_' + Date.now());
    secondApp.auth().createUserWithEmailAndPassword(email, password)
        .then(cred => {
            const uid     = cred.user.uid;
            const profile = { uid, name, email, role };
            if (!hotelData.users) hotelData.users = [];
            hotelData.users.push(profile);
            // Remove from banned list in case this user was previously deleted
            return window.fbDb.ref('bannedUsers/' + uid).remove().catch(() => {})
                .then(() => window.fbDb.ref('users/' + uid).set({ name, email, role }))
                .then(() => saveDataToStorage())
                .then(() => secondApp.delete());
        })
        .then(() => {
            btn.disabled = false;
            closeModal('addUserModal');
            loadSettingsPage();
            showToast('User added successfully!', 'success');
        })
        .catch(err => {
            btn.disabled = false;
            // If email already exists in Auth, it may be a previously deleted user
            if (err.code === 'auth/email-already-in-use') {
                errEl.textContent = 'This email already exists in the system. If this was a deleted user, please use a different email address or contact support.';
            } else {
                errEl.textContent = err.message;
            }
            errEl.style.display = 'block';
            secondApp.delete().catch(() => {});
        });
}

function updateUserField(index, field, value) {
    if (!hotelData.users[index]) return;
    hotelData.users[index][field] = value;
    const uid = hotelData.users[index].uid;
    if (uid && window.fbDb) {
        window.fbDb.ref('users/' + uid + '/' + field).set(value).catch(() => {});
    }
    saveDataToStorage();
}

// Changing your OWN password can be done directly via Firebase Auth (updatePassword), so that
// still opens the inline modal. But a client-side app can never set *another* user's password
// directly without the Admin SDK/Cloud Functions — the old code here faked it by writing a
// plaintext "tempPassword" to the database and telling the admin it worked, except nothing ever
// read that field back, so the target user's real password never actually changed. Firebase's
// built-in reset email is the real, working, secure way to do this client-side.
function sendPasswordReset(email) {
    if (loggedInUser && email === loggedInUser.email) {
        openChangePasswordModal(email);
        return;
    }
    if (!confirm(`Send a password reset email to ${email}?`)) return;
    window.fbAuth.sendPasswordResetEmail(email)
        .then(() => showToast(`Password reset email sent to ${email}.`, 'success'))
        .catch(err => showToast(err.message, 'error'));
}

let _passwordChangeTargetEmail = null;

function openChangePasswordModal(email) {
    _passwordChangeTargetEmail = email;
    document.getElementById('newPasswordInput').value = '';
    document.getElementById('confirmPasswordInput').value = '';
    document.getElementById('changePasswordError').style.display = 'none';
    openModal('changePasswordModal');
}

function handleChangePassword(e) {
    e.preventDefault();
    const newPass = document.getElementById('newPasswordInput').value;
    const confirmPass = document.getElementById('confirmPasswordInput').value;
    const errEl = document.getElementById('changePasswordError');
    const btn = document.getElementById('changePasswordBtn');

    if (newPass !== confirmPass) {
        errEl.textContent = 'Passwords do not match.';
        errEl.style.display = 'block';
        return;
    }
    if (newPass.length < 6) {
        errEl.textContent = 'Password must be at least 6 characters.';
        errEl.style.display = 'block';
        return;
    }

    errEl.style.display = 'none';
    btn.disabled = true;

    // This modal is only ever opened for changing your OWN password (sendPasswordReset() routes
    // any other user straight to a real Firebase reset email instead) — Firebase Auth lets a
    // signed-in user update their own password directly, no Admin SDK needed.
    const currentUser = window.fbAuth.currentUser;
    if (!currentUser) {
        btn.disabled = false;
        errEl.textContent = 'Not signed in.';
        errEl.style.display = 'block';
        return;
    }
    currentUser.updatePassword(newPass)
        .then(() => {
            btn.disabled = false;
            closeModal('changePasswordModal');
            showToast('Password updated successfully!', 'success');
        })
        .catch(err => {
            btn.disabled = false;
            errEl.textContent = err.message;
            errEl.style.display = 'block';
        });
}

function removeUser(index) {
    const user = hotelData.users[index];
    if (!user) return;
    if (user.uid === loggedInUser?.uid || user.email === loggedInUser?.email) {
        showToast(t('toast_cannot_delete_self'), 'error');
        return;
    }
    if (!confirm('Remove user ' + user.name + '?')) return;

    if (user.uid && window.fbDb) {
        // Remove user profile from DB
        window.fbDb.ref('users/' + user.uid).remove().catch(() => {});
        // Ban the UID so they cannot log in again even if Auth account persists
        window.fbDb.ref('bannedUsers/' + user.uid).set({ email: user.email, bannedAt: new Date().toISOString() }).catch(() => {});
        // Remove from hotelData users list in Firebase
        window.fbDb.ref('hotelData/users').once('value').then(snap => {
            const users = snap.val() || [];
            const filtered = Array.isArray(users)
                ? users.filter((_, i) => i !== index)
                : Object.values(users).filter(u => u.uid !== user.uid);
            window.fbDb.ref('hotelData/users').set(filtered).catch(() => {});
        }).catch(() => {});
    }

    hotelData.users.splice(index, 1);
    saveDataToStorage();
    showToast('User deleted successfully.', 'success');
    loadSettingsPage();
}

function addRoomStatus() {
    if (!hotelData.settings.roomStatuses) hotelData.settings.roomStatuses = [];
    hotelData.settings.roomStatuses.push({ id: 'status_' + Date.now(), label: 'New Status', color: '#6b7280', bookable: false });
    saveDataToStorage();
    loadStatusesSection();
}

function removeRoomStatus(index) {
    const st = hotelData.settings.roomStatuses[index];
    if (st && st.system) return;
    hotelData.settings.roomStatuses.splice(index, 1);
    saveDataToStorage();
    loadStatusesSection();
}

// ==================== GO-LIVE RESET ====================
// Wipes all test/operational data (guests, activity, purchases, outside income, shift
// history, reservation log) while keeping the room list, room/account settings, and every
// login account untouched. Room statuses reset to Available since their test guests/
// reservations no longer exist after the wipe.
function resetToProduction() {
    if (!requireOnline()) return;
    if (loggedInUser?.role !== 'admin') { showToast(t('access_denied'), 'error'); return; }

    const warning = 'This will permanently delete ALL guests, check-ins/outs, reservations, purchases, ' +
        'outside income, services, and shift history from the database.\n\n' +
        'Room numbers/types/prices, the Activity Log, and all user accounts will be KEPT, but every ' +
        'room\'s status will reset to Available.\n\n' +
        'This cannot be undone. Continue?';
    if (!confirm(warning)) return;

    const typed = prompt('Type RESET (all caps) to confirm permanent deletion:');
    if (typed !== 'RESET') {
        showToast('Reset cancelled — confirmation text did not match.', 'error');
        return;
    }

    // saveDataToStorage() below does a full overwrite of the database, including hotelData.users —
    // a local mirror that can be stale or already-corrupted (e.g. from a past reset). Sign-in never
    // reads that mirror; it reads each account's profile from the separate `users/{uid}` path. So on
    // every reset, rebuild hotelData.users fresh from that authoritative path — this both prevents a
    // stale copy from erasing accounts AND self-heals a list that's already missing accounts.
    window.fbDb.ref('users').once('value').then(snap => {
        const accounts = snap.val() || {};
        const rebuilt = Object.keys(accounts).map(uid => ({ uid, ...accounts[uid] }));
        if (rebuilt.length) hotelData.users = rebuilt;

        hotelData.rooms = (hotelData.rooms || []).map(r => ({
            id: r.id, number: r.number, type: r.type, price: r.price,
            capacity: r.capacity, floor: r.floor, description: r.description,
            status: 'available', currentGuest: null, reservationInfo: null,
            isTemporary: false, savedReservation: null, priceHistory: []
        }));
        hotelData.guests = [];
        // Activity Log is deliberately kept — it's the audit trail of who did what, which stays
        // meaningful across a reset rather than being test data itself.
        hotelData.purchases = [];
        hotelData.outsideIncome = [];
        hotelData.shiftLog = [];
        hotelData.reservationLog = [];
        hotelData.orders = [];
        hotelData.priceHistory = [];
        hotelData.deletedRoomIds = [];
        hotelData.deletedGuestIds = [];
        // These are the Dashboard "Reset Counter" baselines (income/purchases/outside-income cards)
        // — without clearing them too, the cards would keep subtracting an old baseline from the
        // now-empty totals and show stale (often negative) leftover numbers instead of a clean $0.
        hotelData.incomeResets = [];
        hotelData.incomeResetsIQD = [];
        hotelData.incomeResetsUSD = [];
        hotelData.incomeResetsCardIQD = [];
        hotelData.outsideIncomeResets = [];
        hotelData.oiResetsIQD = [];
        hotelData.oiResetsUSD = [];
        hotelData.oiResetsCardIQD = [];
        hotelData.purchasesResets = [];
        hotelData.purchResetsIQD = [];
        hotelData.purchResetsUSD = [];
        hotelData.purchResetsCardIQD = [];

        addActivity('Database reset for production — rooms and Activity Log kept, all other data cleared');
        showToast('Database reset for production — rooms and Activity Log kept, everything else cleared.', 'success');
        loadSettingsPage();
    }).catch(() => {
        showToast('Reset failed — could not verify the user list. Nothing was changed.', 'error');
    });
}

// ==================== UTILITY FUNCTIONS ====================
function updateCurrentDate() {
    const date = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const locale = currentLang === 'ar' ? 'ar-IQ' : 'en-US';
    document.getElementById('currentDate').textContent = date.toLocaleDateString(locale, options);
}

function addActivity(description, roomNumber = null, action = 'action', amount = null, guestName = null) {
    const entry = {
        description,
        roomNumber,
        action,
        amount,
        guestName,
        timestamp: new Date().toISOString(),
        userName: loggedInUser?.name || 'System',
        userRole: loggedInUser?.role || 'system'
    };
    hotelData.activities.push(entry);
    if (hotelData.activities.length > 100) {
        hotelData.activities = hotelData.activities.slice(-100);
    }
    if (window.fbDb) {
        window.fbDb.ref('logs').push(entry).catch(() => {});
    }
    saveDataToStorage();
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast alert alert-${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ==================== AUTH SYSTEM ====================
function checkAuth() {
    showLogin();
}

function showLogin() {
    const overlay = document.getElementById('loginOverlay');
    if (overlay) {
        overlay.style.display = 'flex';
        const nameEl = document.getElementById('loginHotelName');
        if (nameEl) nameEl.textContent = hotelData.settings.hotelName;
        translatePage();
    }
}

function showApp() {
    const overlay = document.getElementById('loginOverlay');
    if (overlay) overlay.style.display = 'none';
    applyRoleUI();

    // Reset all pages and sidebar active states
    document.querySelectorAll('.page-content').forEach(p => p.style.display = 'none');
    document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));

    const role = loggedInUser.role;
    if (role === 'cleaner') {
        const cp = document.getElementById('cleanerStatus');
        if (cp) cp.style.display = 'block';
        const ci = document.querySelector('.sidebar-item[data-roles="cleaner"]');
        if (ci) ci.classList.add('active');
        document.getElementById('pageTitle').textContent = t('cleaner_page_title');
        loadCleanerPage();
    } else if (role === 'reception') {
        const ci = document.getElementById('checkIn');
        if (ci) ci.style.display = 'block';
        const cib = document.querySelector('.sidebar-item[onclick*="checkIn"]');
        if (cib) cib.classList.add('active');
        document.getElementById('pageTitle').textContent = t('nav_checkin');
        loadCheckInPage();
    } else {
        const dash = document.getElementById('dashboard');
        if (dash) dash.style.display = 'block';
        const di = document.querySelector('.sidebar-item[onclick*="dashboard"]');
        if (di) di.classList.add('active');
        document.getElementById('pageTitle').textContent = t('nav_dashboard');
        loadDashboard();
    }
    const userEl = document.getElementById('userDisplayName');
    if (userEl) userEl.textContent = `${loggedInUser.name} (${t('role_' + loggedInUser.role)})`;
    updateNotificationBell();
}

function handleLogin(e) {
    e.preventDefault();
    const email    = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const errEl    = document.getElementById('loginError');
    const btn      = e.target.querySelector('button[type="submit"]');
    errEl.style.display = 'none';
    if (btn) btn.disabled = true;

    window.fbAuth.signInWithEmailAndPassword(email, password)
        .then(cred => {
            const uid = cred.user.uid;
            // Check banned status — fail silently so login still works if path doesn't exist in rules yet
            const banCheck = window.fbDb
                ? window.fbDb.ref('bannedUsers/' + uid).once('value').catch(() => null)
                : Promise.resolve(null);
            return banCheck.then(banSnap => {
                if (banSnap && banSnap.exists()) {
                    window.fbAuth.signOut();
                    throw new Error('This account has been deleted from the system.');
                }
                return window.fbDb.ref('users/' + uid).once('value').then(snap => {
                    const profile = snap.val();
                    if (!profile) throw new Error(t('login_error') || 'User profile not found.');
                    loggedInUser = { uid, ...profile };
                    sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
                    return window.fbDb.ref('hotelData').once('value');
                });
            });
        })
        .then(dataSnap => {
            const fbData = dataSnap.val();
            if (fbData) { hotelData = fbMerge(fbData); localStorage.setItem('hotelData', JSON.stringify(hotelData)); }
            startShiftSession();
            if (btn) btn.disabled = false;
            showApp();
            setupFirebaseRealtimeListener();
        })
        .catch(err => {
            if (btn) btn.disabled = false;
            errEl.style.display = 'block';
            const authErrs = ['auth/wrong-password','auth/user-not-found','auth/invalid-credential','auth/invalid-email'];
            errEl.textContent = authErrs.includes(err.code) ? (t('login_error') || 'Invalid email or password.') : err.message;
        });
}

const PAGE_ACCESS = {
    dashboard: ['admin', 'reception'],
    rooms: ['admin'],
    checkIn: ['admin', 'reception'],
    checkOut: ['admin', 'reception'],
    services: ['admin'],
    history: ['admin', 'reception'],
    reports: ['admin'],
    purchases: ['admin', 'reception'],
    outsideIncome: ['admin', 'reception'],
    settings: ['admin'],
    cleanerStatus: ['admin', 'cleaner', 'reception'],
};

function applyRoleUI() {
    const role = loggedInUser?.role || 'reception';
    document.querySelectorAll('.sidebar-item[data-roles]').forEach(item => {
        const roles = item.dataset.roles.split(',');
        item.style.display = roles.includes(role) ? '' : 'none';
    });
    const userEl = document.getElementById('userDisplayName');
    if (userEl) userEl.textContent = `${loggedInUser.name} (${t('role_' + role)})`;

    // Cleaner nav visible to all three roles — always labelled "Room Status"
}

// ==================== SHIFT SESSIONS ====================
// Tracks actual login→logout sessions per staff member (not calendar days), so a shift that
// crosses midnight stays together in one report instead of being split across two dates.
function startShiftSession() {
    const staff = loggedInUser?.name || loggedInUser?.email || '—';
    if (!Array.isArray(hotelData.shiftLog)) hotelData.shiftLog = [];
    // Close any stale open shift for this staff first (e.g. browser closed without logging out)
    hotelData.shiftLog.forEach(s => { if (s.staff === staff && !s.logoutAt) s.logoutAt = new Date().toISOString(); });
    hotelData.shiftLog.push({
        id: Math.random().toString(36).substring(2, 11),
        staff,
        loginAt: new Date().toISOString(),
        logoutAt: null
    });
    saveDataToStorage();
}

// Closes the current staff member's open shift. Returns its id (or null if none was open).
function endShiftSession() {
    const staff = loggedInUser?.name || loggedInUser?.email || '—';
    if (!Array.isArray(hotelData.shiftLog)) return null;
    const open = [...hotelData.shiftLog].reverse().find(s => s.staff === staff && !s.logoutAt);
    if (!open) return null;
    open.logoutAt = new Date().toISOString();
    saveDataToStorage();
    return open.id;
}

// Ensures the current staff member always has an open shift to fall back to — covers sessions
// that were already logged in before this feature existed (no shiftLog entry yet).
function getOrStartCurrentShift() {
    const staff = loggedInUser?.name || loggedInUser?.email || '—';
    if (!Array.isArray(hotelData.shiftLog)) hotelData.shiftLog = [];
    let open = [...hotelData.shiftLog].reverse().find(s => s.staff === staff && !s.logoutAt);
    if (!open) {
        open = { id: Math.random().toString(36).substring(2, 11), staff, loginAt: new Date().toISOString(), logoutAt: null };
        hotelData.shiftLog.push(open);
        saveDataToStorage();
    }
    return open;
}

// Firebase keeps an authenticated session alive across page reloads and even across days (that's
// what onAuthStateChanged auto-restoring is for) — but startShiftSession() only ever ran from the
// login *form* submit. So a staff member who never explicitly clicks Logout (they just close the
// tablet, or it goes to sleep) keeps reusing the SAME open shift indefinitely — it can never roll
// over on its own, which is why a shift opened weeks ago can still show up as "current" today.
// Called on every auto-restored session: leaves a genuinely still-ongoing shift alone (so page
// refreshes mid-shift don't fragment it), but closes out anything open for longer than a shift
// could plausibly run and starts a fresh one, so "current shift" always actually means today.
const MAX_PLAUSIBLE_SHIFT_HOURS = 18;
function ensureFreshShiftSession() {
    const staff = loggedInUser?.name || loggedInUser?.email || '—';
    if (!Array.isArray(hotelData.shiftLog)) hotelData.shiftLog = [];
    const open = [...hotelData.shiftLog].reverse().find(s => s.staff === staff && !s.logoutAt);
    if (!open) { startShiftSession(); return; }
    const hoursOpen = (Date.now() - new Date(open.loginAt).getTime()) / 3600000;
    if (hoursOpen > MAX_PLAUSIBLE_SHIFT_HOURS) {
        startShiftSession(); // closes the stale one and opens a fresh one, same as a real login would
    }
}

// Admin shortcut: jump straight to a staff member's open (live, still logged in) session,
// instead of having to dig through the Month/Shift dropdowns to find the one marked "(current)".
function jumpToCurrentSession() {
    const staffName = document.getElementById('srStaffSelect')?.value;
    if (!staffName) return;
    const open = [...(hotelData.shiftLog || [])].reverse().find(s => s.staff === staffName && !s.logoutAt);
    if (!open) {
        showToast(`${staffName} is not currently logged in.`, 'error');
        return;
    }
    downloadShiftReport(false, open.id, null, staffName);
}

function downloadShiftReport(autoExcel = false, shiftId = null, monthKey = null, staffOverride = null) {
    const now = new Date();
    const pad = n => String(n).padStart(2, '0');
    const esc = s => String(s == null ? '—' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

    const hotel  = hotelData.settings?.hotelName || 'Hotel';
    const myName = loggedInUser?.name || loggedInUser?.email || '—';
    const isAdmin = loggedInUser?.role === 'admin';
    const staff  = (isAdmin && staffOverride) ? staffOverride : myName;
    const isOwnSession = staff === myName;
    const byMe  = name => !(!name || name === '—') && name === staff;

    // Admins can browse every staff member's shifts; everyone else only sees their own.
    const allStaffNames = isAdmin
        ? [...new Set((hotelData.shiftLog || []).map(s => s.staff))].sort()
        : [myName];
    const staffOptionsHtml = allStaffNames.map(n =>
        `<option value="${esc(n)}" ${n === staff ? 'selected' : ''}>${esc(n)}</option>`
    ).join('');

    // Shifts are tracked by actual login→logout time, not calendar day, so a shift that
    // crosses midnight (e.g. 10pm–6am) stays together as one report instead of being split.
    // Only auto-open a "current" shift when no specific one was requested — otherwise (e.g. right
    // after logout just closed it) this would immediately re-open a brand-new duplicate session.
    // Never auto-open a shift while an admin is just browsing someone else's history.
    if (!shiftId && isOwnSession) getOrStartCurrentShift();
    const allMyShifts = (hotelData.shiftLog || [])
        .filter(s => s.staff === staff)
        .sort((a, b) => new Date(b.loginAt) - new Date(a.loginAt));

    const monthKeyOf   = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}`;
    const monthLabelOf = d => d.toLocaleString([], { month: 'long', year: 'numeric' });

    // Resolve which shift we're showing: explicit shift id wins, then a shift inside the
    // requested month, then fall back to the most recent shift overall.
    let shift = (shiftId && allMyShifts.find(s => s.id === shiftId)) || null;
    if (!shift && monthKey) {
        shift = allMyShifts.find(s => monthKeyOf(new Date(s.loginAt)) === monthKey) || null;
    }
    if (!shift) shift = allMyShifts[0];
    const isLiveSession = !shift.logoutAt; // staff is logged in right now, viewing this session live

    const activeMonthKey = monthKeyOf(new Date(shift.loginAt));
    const myShifts = allMyShifts.filter(s => monthKeyOf(new Date(s.loginAt)) === activeMonthKey);

    const shiftStart = new Date(shift.loginAt);
    const shiftEnd    = shift.logoutAt ? new Date(shift.logoutAt) : now;
    // Login/logout are millisecond-precise, but check-in/checkout/reservation times come from
    // <input type="datetime-local"> and only carry minute precision. If staff log in and check a
    // guest in within the same clock-minute, the truncated check-in time can land a few seconds
    // *before* the precise login time and get wrongly excluded — so floor the lower bound to the
    // start of its minute to match the granularity of what it's being compared against.
    const shiftStartFloor = new Date(shiftStart.getFullYear(), shiftStart.getMonth(), shiftStart.getDate(), shiftStart.getHours(), shiftStart.getMinutes(), 0, 0);
    const inShift = d => { if (!d) return false; const dt = new Date(d); return dt >= shiftStartFloor && dt <= shiftEnd; };
    const fmtShiftTime = d => d.toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    const shiftLabel = `${fmtShiftTime(shiftStart)} → ${shift.logoutAt ? fmtShiftTime(shiftEnd) : 'now (current)'}`;
    const shiftOptionsHtml = myShifts.map(s => {
        const st = new Date(s.loginAt);
        const en = s.logoutAt ? new Date(s.logoutAt) : null;
        const label = `${fmtShiftTime(st)} → ${en ? fmtShiftTime(en) : 'now (current)'}`;
        return `<option value="${s.id}" ${s.id === shift.id ? 'selected' : ''}>${esc(label)}</option>`;
    }).join('');
    // One option per distinct month that has at least one shift, most recent first
    const monthKeys = [...new Set(allMyShifts.map(s => monthKeyOf(new Date(s.loginAt))))];
    const monthOptionsHtml = monthKeys.map(k => {
        const [y, m] = k.split('-').map(Number);
        const label = monthLabelOf(new Date(y, m - 1, 1));
        return `<option value="${k}" ${k === activeMonthKey ? 'selected' : ''}>${esc(label)}</option>`;
    }).join('');

    const allGuests = [...(hotelData.guests || [])];
    const resLog    = [...(hotelData.reservationLog || [])];
    const allRooms  = [...(hotelData.rooms || [])];

    // Match by checkInRecordedAt (the real moment the receptionist did this), not the guest's
    // checkIn field — a late-night arrival is deliberately backdated to the previous calendar day
    // for hotel-night billing purposes, which would otherwise fall before this shift even started
    // and silently vanish from the report of whoever actually handled it. Older records made before
    // this field existed fall back to checkIn.
    const checkInsToday  = allGuests.filter(g => inShift(g.checkInRecordedAt || g.checkIn) && byMe(g.checkedInBy));
    const checkOutsToday = allGuests.filter(g => inShift(g.checkedOutAt) && byMe(g.checkedOutBy));
    const reservesToday  = resLog.filter(e => inShift(e.reservedAt)      && byMe(e.reservedBy));

    const servicesToday = [];
    allGuests.forEach(g => {
        if (!Array.isArray(g.orders)) return;
        g.orders.filter(o => inShift(o.timestamp) && byMe(o.addedBy)).forEach(o => {
            const room = allRooms.find(r => r.id === g.roomId);
            servicesToday.push({ guestName: g.name, roomNum: room ? room.number : '—', order: o, isCheckedOut: !!g.checkedOutAt });
        });
    });

    // Extra deposits added mid-stay (e.g. guest extends their stay and pays another advance) —
    // tracked separately from the check-in deposit so they credit whoever actually collected them.
    const additionalDepositsToday = [];
    allGuests.forEach(g => {
        if (!Array.isArray(g.depositLog)) return;
        g.depositLog.filter(d => inShift(d.addedAt) && byMe(d.addedBy)).forEach(d => {
            const room = allRooms.find(r => r.id === g.roomId);
            additionalDepositsToday.push({ guestName: g.name, roomNum: room ? room.number : '—', entry: d });
        });
    });

    // guest.depositCashIQD/USD/CardIQD are running totals that confirmAddDeposit() keeps adding to,
    // so they already include any mid-stay top-ups. Subtract the logged top-ups back out here to get
    // just what was collected at check-in — otherwise a top-up would be counted twice in the report
    // (once because it's baked into the running total, once again in its own "Additional Deposits" row).
    // Also subtracts depositCarry* — money already credited to whoever took the reservation
    // (reservationLog, counted below) shouldn't be re-counted again for whoever checks the guest in.
    function checkInOnlyDeposit(g) {
        const log = Array.isArray(g.depositLog) ? g.depositLog : [];
        const adCashIQD = log.reduce((s, d) => s + (d.cashIQD||0), 0);
        const adCashUSD = log.reduce((s, d) => s + (d.cashUSD||0), 0);
        const adCardIQD = log.reduce((s, d) => s + (d.cardIQD||0), 0);
        return {
            cashIQD: (g.depositCashIQD||0) - adCashIQD - (g.depositCarryCashIQD||0),
            cashUSD: (g.depositCashUSD||0) - adCashUSD - (g.depositCarryCashUSD||0),
            cardIQD: (g.depositCardIQD||0) - adCardIQD - (g.depositCarryCardIQD||0)
        };
    }

    // ── Totals ──
    let ciCashIQD = 0, ciCashUSD = 0, ciCardIQD = 0;
    checkInsToday.forEach(g => { const d = checkInOnlyDeposit(g); ciCashIQD += d.cashIQD; ciCashUSD += d.cashUSD; ciCardIQD += d.cardIQD; });

    let coCashIQD = 0, coCashUSD = 0, coCardIQD = 0;
    checkOutsToday.forEach(g => { coCashIQD += g.checkoutCashIQD||0; coCashUSD += g.checkoutCashUSD||0; coCardIQD += g.checkoutCardIQD||0; });

    // Change handed back to guests whose deposit covered more than the full bill — money that left
    // the vault during this shift's checkouts, so it must be deducted from the net total below.
    let refCashIQD = 0, refCashUSD = 0, refCardIQD = 0;
    checkOutsToday.forEach(g => { refCashIQD += g.refundCashIQD||0; refCashUSD += g.refundCashUSD||0; refCardIQD += g.refundCardIQD||0; });

    // Cancelled reservations are shown in the table for audit trail but excluded from vault
    // totals — the deposit was returned to the customer so it never actually came into the vault.
    const activeReservesToday    = reservesToday.filter(e => e.status !== 'cancelled');
    const cancelledReservesToday = reservesToday.filter(e => e.status === 'cancelled');
    let resCashIQD = 0, resCashUSD = 0, resCardIQD = 0;
    activeReservesToday.forEach(e => { resCashIQD += e.depositCashIQD||0; resCashUSD += e.depositCashUSD||0; resCardIQD += e.depositCardIQD||0; });

    // Services for checked-out guests are already embedded in coCashIQD/coCardIQD (checkout payment covers room + services).
    // Services for still-active guests are NOT counted in the vault total — money hasn't been collected yet.
    const svcPendingIQD    = servicesToday.filter(s => !s.isCheckedOut).reduce((sum, s) => sum + (s.order.price||0)*(s.order.quantity||1), 0);
    const svcTotalIQD      = servicesToday.reduce((sum, s) => sum + (s.order.price||0)*(s.order.quantity||1), 0);
    // Service amounts collected at checkout (stored per-guest at checkout time, already inside coCashIQD/coCardIQD)
    const svcCheckedOutIQD = checkOutsToday.reduce((sum, g) => sum + (g.serviceAmountIQD || 0), 0);

    // Outside income added by this staff member during this shift
    const outsideIncomeToday = (hotelData.outsideIncome || []).filter(p => inShift(p.date) && byMe(p.addedBy));
    const oiIQD     = outsideIncomeToday.reduce((sum, p) => sum + (p.priceIQD     || 0), 0);
    const oiUSD     = outsideIncomeToday.reduce((sum, p) => sum + (p.priceUSD     || 0), 0);
    const oiCardIQD = outsideIncomeToday.reduce((sum, p) => sum + (p.priceCardIQD || 0), 0);

    let adCashIQD = 0, adCashUSD = 0, adCardIQD = 0;
    additionalDepositsToday.forEach(({ entry: d }) => { adCashIQD += d.cashIQD||0; adCashUSD += d.cashUSD||0; adCardIQD += d.cardIQD||0; });

    // Purchases made by this staff member during this shift (deducted from vault)
    const purchasesToday = (hotelData.purchases || []).filter(p => inShift(p.date) && byMe(p.addedBy));
    const purchCashIQDShift = purchasesToday.reduce((sum, p) => sum + (p.priceIQD != null ? p.priceIQD : (p.price||0)), 0);
    const purchCardIQDShift = purchasesToday.reduce((sum, p) => sum + (p.priceCardIQD||0), 0);
    const purchIQD = purchCashIQDShift + purchCardIQDShift;
    const purchUSD = purchasesToday.reduce((sum, p) => sum + (p.priceUSD||0), 0);

    // Cash (IQD) and MasterCard (IQD) are tracked as separate vault totals — a MasterCard purchase
    // or income never mixes into the cash drawer, so the report shouldn't merge them into one figure.
    const grandCashIQD = ciCashIQD + coCashIQD + resCashIQD + oiIQD + adCashIQD - purchCashIQDShift - refCashIQD;
    const grandCardIQD = ciCardIQD + coCardIQD + resCardIQD + oiCardIQD + adCardIQD - purchCardIQDShift - refCardIQD;
    const grandUSD = ciCashUSD + coCashUSD + resCashUSD + oiUSD + adCashUSD - purchUSD - refCashUSD;
    const dateStr  = `${shiftStart.getFullYear()}-${pad(shiftStart.getMonth()+1)}-${pad(shiftStart.getDate())}`;

    // ── HTML table builder (shared for Excel + Print) ──
    function buildTableHtml(forPrint) {
        const C = forPrint
            ? { title:'#222', sect:'#333', colHdr:'#555', sub:'#ddd', subC:'#000', vHdr:'#222', vRow:'#f5f5f5', grand:'#111', even:'#f9f9f9', note:'#fffbe6' }
            : { title:'#1e3a8a', sect:'#1d4ed8', colHdr:'#3b82f6', sub:'#bfdbfe', subC:'#1e3a5f', vHdr:'#14532d', vRow:'#f0fdf4', grand:'#15803d', even:'#f0f7ff', note:'#fefce8' };
        const cell  = (v, s='') => `<td style="padding:6px 8px;border:1px solid #ddd;${s}">${esc(v)}</td>`;
        const hcell = (v, s='') => `<td style="padding:7px 10px;font-weight:700;color:#fff;background:${C.colHdr};border:1px solid #fff;${s}">${esc(v)}</td>`;
        const shead = (v, n) => `<tr><td colspan="${n}" style="padding:9px 10px;font-weight:700;color:#fff;background:${C.sect};font-size:12px;letter-spacing:1px;text-transform:uppercase;border-top:4px solid #fff;">${esc(v)}</td></tr>`;
        const sub   = (cells) => `<tr>${cells.map(v=>`<td style="padding:6px 10px;font-weight:700;background:${C.sub};color:${C.subC};border:1px solid #ccc;">${esc(v)}</td>`).join('')}</tr>`;
        const empty = (msg, n) => `<tr><td colspan="${n}" style="padding:8px;color:#9ca3af;font-style:italic;background:${C.note};">${esc(msg)}</td></tr>`;
        const drow  = (cells, i) => `<tr>${cells.map(v=>`<td style="padding:6px 8px;border:1px solid #ddd;background:${i%2===0?C.even:'#fff'};">${esc(v)}</td>`).join('')}</tr>`;

        let h = `<table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:12px;">`;

        // Header
        h += `<tr><td colspan="8" style="padding:14px;font-size:17px;font-weight:700;color:#fff;background:${C.title};text-align:center;letter-spacing:2px;">${esc(hotel)} — SHIFT REPORT</td></tr>`;
        h += `<tr><td colspan="8" style="padding:7px 10px;background:${C.even};"><b>Staff:</b> ${esc(staff)}</td></tr>`;
        h += `<tr><td colspan="8" style="padding:7px 10px;background:${C.even};"><b>Shift:</b> ${esc(shiftLabel)} &nbsp;&nbsp; <b>Generated:</b> ${now.toLocaleString()}</td></tr>`;
        h += `<tr><td colspan="8" style="padding:6px 10px;background:${C.note};color:#92400e;font-style:italic;">Filtered to this staff member's activity during this shift only</td></tr>`;
        h += `<tr><td colspan="8" style="padding:4px;"></td></tr>`;

        // CHECK-IN DEPOSITS
        h += shead('Check-in Deposits', 8);
        h += `<tr>${['#','Guest Name','Room','Check-in Time','Cash (IQD)','Cash ($)','MasterCard (IQD)','Notes'].map(v=>hcell(v)).join('')}</tr>`;
        if (checkInsToday.length) {
            checkInsToday.forEach((g, i) => {
                const room = allRooms.find(r => r.id === g.roomId);
                const { cashIQD: ci, cashUSD: cu, cardIQD: ca } = checkInOnlyDeposit(g);
                h += drow([i+1, g.name||'—', room?`Room ${room.number}`:'—', g.checkIn?new Date(g.checkIn).toLocaleString():'—', ci>0?`IQD ${fmtIQD(ci)}`:'—', cu>0?`$${fmtUSD(cu)}`:'—', ca>0?`IQD ${fmtIQD(ca)}`:'—', g.notes||'—'], i);
            });
        } else { h += empty('No check-ins today', 8); }
        h += sub(['','','','SUBTOTAL', `IQD ${fmtIQD(ciCashIQD)}`, `$${fmtUSD(ciCashUSD)}`, `IQD ${fmtIQD(ciCardIQD)}`, '']);
        h += `<tr><td colspan="8" style="padding:4px;"></td></tr>`;

        // CHECK-OUT PAYMENTS
        h += shead('Check-out Payments Collected', 8);
        h += `<tr>${['#','Guest Name','Room','Check-out Time','Cash (IQD)','Cash ($)','MasterCard (IQD)','Note'].map(v=>hcell(v)).join('')}</tr>`;
        if (checkOutsToday.length) {
            checkOutsToday.forEach((g, i) => {
                const room = allRooms.find(r => r.id === g.roomId);
                const ci = g.checkoutCashIQD||0, cu = g.checkoutCashUSD||0, ca = g.checkoutCardIQD||0;
                h += drow([i+1, g.name||'—', room?`Room ${room.number}`:'—', g.checkedOutAt?new Date(g.checkedOutAt).toLocaleString():'—', ci>0?`IQD ${fmtIQD(ci)}`:'—', cu>0?`$${fmtUSD(cu)}`:'—', ca>0?`IQD ${fmtIQD(ca)}`:'—', g.checkoutNote||'—'], i);
            });
        } else { h += empty('No check-outs today', 8); }
        h += sub(['','','','SUBTOTAL', `IQD ${fmtIQD(coCashIQD)}`, `$${fmtUSD(coCashUSD)}`, `IQD ${fmtIQD(coCardIQD)}`, '']);
        h += `<tr><td colspan="8" style="padding:4px;"></td></tr>`;

        // REFUNDS TO GUESTS (change given back when a deposit overpaid the bill)
        const refundsToday = checkOutsToday.filter(g => (g.refundCashIQD||0) > 0 || (g.refundCashUSD||0) > 0 || (g.refundCardIQD||0) > 0);
        h += shead('Refunds to Guests (Deductions)', 8);
        h += `<tr>${['#','Guest Name','Room','Check-out Time','Cash (IQD)','Cash ($)','MasterCard (IQD)','Note'].map(v=>hcell(v)).join('')}</tr>`;
        if (refundsToday.length) {
            refundsToday.forEach((g, i) => {
                const room = allRooms.find(r => r.id === g.roomId);
                const ri = g.refundCashIQD||0, ru = g.refundCashUSD||0, ra = g.refundCardIQD||0;
                h += drow([i+1, g.name||'—', room?`Room ${room.number}`:'—', g.checkedOutAt?new Date(g.checkedOutAt).toLocaleString():'—', ri>0?`- IQD ${fmtIQD(ri)}`:'—', ru>0?`- $${fmtUSD(ru)}`:'—', ra>0?`- IQD ${fmtIQD(ra)}`:'—', 'Deposit overpaid the bill'], i);
            });
        } else { h += empty('No refunds today', 8); }
        h += sub(['','','','SUBTOTAL', refCashIQD>0?`- IQD ${fmtIQD(refCashIQD)}`:'—', refCashUSD>0?`- $${fmtUSD(refCashUSD)}`:'—', refCardIQD>0?`- IQD ${fmtIQD(refCardIQD)}`:'—', '']);
        h += `<tr><td colspan="8" style="padding:4px;"></td></tr>`;

        // RESERVATION DEPOSITS
        h += shead('Reservation Deposits', 8);
        h += `<tr>${['#','Guest Name','Room','Reserved At','Cash (IQD)','Cash ($)','MasterCard (IQD)','Notes'].map(v=>hcell(v)).join('')}</tr>`;
        if (reservesToday.length) {
            reservesToday.forEach((e, i) => {
                const ci = e.depositCashIQD||0, cu = e.depositCashUSD||0, ca = e.depositCardIQD||0;
                if (e.status === 'cancelled') {
                    const cancelAt = e.cancelledAt ? new Date(e.cancelledAt).toLocaleString() : '—';
                    h += `<tr>
                        <td style="padding:6px 8px;border:1px solid #ddd;background:#fef2f2;color:#9ca3af;">${i+1}</td>
                        <td style="padding:6px 8px;border:1px solid #ddd;background:#fef2f2;color:#9ca3af;text-decoration:line-through;">${esc(e.guestName||'—')}</td>
                        <td style="padding:6px 8px;border:1px solid #ddd;background:#fef2f2;color:#9ca3af;text-decoration:line-through;">Room ${esc(String(e.roomNumber||'—'))}</td>
                        <td style="padding:6px 8px;border:1px solid #ddd;background:#fef2f2;color:#9ca3af;">${e.reservedAt?new Date(e.reservedAt).toLocaleString():'—'}</td>
                        <td colspan="4" style="padding:6px 8px;border:1px solid #ddd;background:#fef2f2;color:#dc2626;font-style:italic;font-size:11px;">❌ CANCELLED at ${cancelAt} — deposit returned to customer, not counted in vault</td>
                    </tr>`;
                } else {
                    h += drow([i+1, e.guestName||'—', `Room ${e.roomNumber||'—'}`, e.reservedAt?new Date(e.reservedAt).toLocaleString():'—', ci>0?`IQD ${fmtIQD(ci)}`:'—', cu>0?`$${fmtUSD(cu)}`:'—', ca>0?`IQD ${fmtIQD(ca)}`:'—', e.notes||'—'], i);
                }
            });
        } else { h += empty('No reservations today', 8); }
        const _cancelledResCount = cancelledReservesToday.length;
        const _subLabel = _cancelledResCount > 0 ? `SUBTOTAL (${_cancelledResCount} cancelled — excluded)` : 'SUBTOTAL';
        h += sub(['','','',_subLabel, `IQD ${fmtIQD(resCashIQD)}`, `$${fmtUSD(resCashUSD)}`, `IQD ${fmtIQD(resCardIQD)}`, '']);
        h += `<tr><td colspan="8" style="padding:4px;"></td></tr>`;

        // ADDITIONAL DEPOSITS (added mid-stay, e.g. guest extends and pays another advance)
        h += shead('Additional Deposits (Mid-Stay)', 8);
        h += `<tr>${['#','Guest Name','Room','Time','Cash (IQD)','Cash ($)','MasterCard (IQD)',''].map(v=>hcell(v)).join('')}</tr>`;
        if (additionalDepositsToday.length) {
            additionalDepositsToday.forEach(({ guestName, roomNum, entry: d }, i) => {
                h += drow([i+1, guestName||'—', `Room ${roomNum}`, d.addedAt?new Date(d.addedAt).toLocaleString():'—', d.cashIQD>0?`IQD ${fmtIQD(d.cashIQD)}`:'—', d.cashUSD>0?`$${fmtUSD(d.cashUSD)}`:'—', d.cardIQD>0?`IQD ${fmtIQD(d.cardIQD)}`:'—', ''], i);
            });
        } else { h += empty('No additional deposits today', 8); }
        h += sub(['','','','SUBTOTAL', `IQD ${fmtIQD(adCashIQD)}`, `$${fmtUSD(adCashUSD)}`, `IQD ${fmtIQD(adCardIQD)}`, '']);
        h += `<tr><td colspan="8" style="padding:4px;"></td></tr>`;

        // SERVICES
        h += shead('Services Added Today', 8);
        h += `<tr>${['#','Guest Name','Room','Service','Qty','Unit Price (IQD)','Total (IQD)','Status'].map(v=>hcell(v)).join('')}</tr>`;
        if (servicesToday.length) {
            servicesToday.forEach((s, i) => {
                const o = s.order, tot = (o.price||0)*(o.quantity||1);
                h += drow([i+1, s.guestName||'—', `Room ${s.roomNum}`, o.name||'—', o.quantity||1, o.price>0?`IQD ${fmtIQD(o.price)}`:'—', tot>0?`IQD ${fmtIQD(tot)}`:'—', s.isCheckedOut?'✓ Counted (in checkout payment)':'⏳ Pending — billed at checkout'], i);
            });
        } else { h += empty('No services today', 8); }
        h += sub(['','','','','','TOTAL (all)', `IQD ${fmtIQD(svcTotalIQD)}`, `Pending (not counted): IQD ${fmtIQD(svcPendingIQD)}`]);
        h += `<tr><td colspan="8" style="padding:6px;"></td></tr>`;

        // OUTSIDE INCOME
        h += shead('Outside Income', 8);
        h += `<tr>${['#','Name','Date','Cash (IQD)','Cash ($)','MasterCard (IQD)','','Notes'].map(v=>hcell(v)).join('')}</tr>`;
        if (outsideIncomeToday.length) {
            outsideIncomeToday.forEach((p, i) => {
                const oCard = p.priceCardIQD || 0;
                h += drow([i+1, p.name||'—', p.date?new Date(p.date).toLocaleString():'—', p.priceIQD>0?`IQD ${fmtIQD(p.priceIQD)}`:'—', p.priceUSD>0?`$${fmtUSD(p.priceUSD)}`:'—', oCard>0?`IQD ${fmtIQD(oCard)}`:'—', '', p.notes||'—'], i);
            });
        } else { h += empty('No outside income today', 8); }
        h += sub(['','','SUBTOTAL', oiIQD>0?`IQD ${fmtIQD(oiIQD)}`:'—', oiUSD>0?`$${fmtUSD(oiUSD)}`:'—', oiCardIQD>0?`IQD ${fmtIQD(oiCardIQD)}`:'—', '', '']);
        h += `<tr><td colspan="8" style="padding:6px;"></td></tr>`;

        // PURCHASES (DEDUCTIONS)
        h += shead('Purchases (Deductions)', 8);
        h += `<tr>${['#','Name','Date','Cash (IQD)','Cash ($)','MasterCard (IQD)','','Notes'].map(v=>hcell(v)).join('')}</tr>`;
        if (purchasesToday.length) {
            purchasesToday.forEach((p, i) => {
                const iqd = p.priceIQD != null ? p.priceIQD : (p.price||0);
                const card = p.priceCardIQD || 0;
                h += drow([i+1, p.name||'—', p.date?new Date(p.date).toLocaleString():'—', iqd>0?`IQD ${fmtIQD(iqd)}`:'—', p.priceUSD>0?`$${fmtUSD(p.priceUSD)}`:'—', card>0?`IQD ${fmtIQD(card)}`:'—', '', p.notes||'—'], i);
            });
        } else { h += empty('No purchases today', 8); }
        h += sub(['','','SUBTOTAL', purchCashIQDShift>0?`- IQD ${fmtIQD(purchCashIQDShift)}`:'—', purchUSD>0?`- $${fmtUSD(purchUSD)}`:'—', purchCardIQDShift>0?`- IQD ${fmtIQD(purchCardIQDShift)}`:'—', '', '']);
        h += `<tr><td colspan="8" style="padding:6px;"></td></tr>`;

        // VAULT SUMMARY
        h += `<tr><td colspan="8" style="padding:11px 10px;font-weight:700;color:#fff;background:${C.vHdr};font-size:13px;text-align:center;letter-spacing:1px;text-transform:uppercase;">Vault Summary — Net Total</td></tr>`;
        h += `<tr><td colspan="8" style="padding:4px;"></td></tr>`;
        h += `<tr>${['Source','IQD','USD ($)'].map((v,i)=>`<td colspan="${i===0?4:2}" style="padding:7px 10px;font-weight:700;background:${C.sub};color:${C.subC};">${esc(v)}</td>`).join('')}</tr>`;

        const vrow = (lbl, iqd, usd) => `<tr>
            <td colspan="4" style="padding:7px 10px;background:${C.vRow};">${esc(lbl)}</td>
            <td colspan="2" style="padding:7px 10px;background:${C.vRow};text-align:right;">${esc(iqd)}</td>
            <td colspan="2" style="padding:7px 10px;background:${C.vRow};text-align:right;">${esc(usd)}</td>
        </tr>`;
        const vneg = (lbl, iqd, usd) => `<tr>
            <td colspan="4" style="padding:7px 10px;background:#fef2f2;color:#dc2626;font-weight:600;">${esc(lbl)}</td>
            <td colspan="2" style="padding:7px 10px;background:#fef2f2;color:#dc2626;font-weight:600;text-align:right;">${esc(iqd)}</td>
            <td colspan="2" style="padding:7px 10px;background:#fef2f2;color:#dc2626;font-weight:600;text-align:right;">${esc(usd)}</td>
        </tr>`;
        h += vrow('Check-in Deposits (Cash)',          `IQD ${fmtIQD(ciCashIQD)}`,  `$${fmtUSD(ciCashUSD)}`);
        h += vrow('Check-in Deposits (MasterCard)',    `IQD ${fmtIQD(ciCardIQD)}`,  '—');
        h += vrow('Check-out Payments (Cash)',         `IQD ${fmtIQD(coCashIQD)}`,  `$${fmtUSD(coCashUSD)}`);
        h += vrow('Check-out Payments (MasterCard)',   `IQD ${fmtIQD(coCardIQD)}`,  '—');
        h += `<tr>
            <td colspan="4" style="padding:6px 10px 6px 24px;background:#f0fdf4;color:#166534;font-style:italic;font-size:12px;">↳ of which: Services (included in checkout above)</td>
            <td colspan="2" style="padding:6px 10px;background:#f0fdf4;color:#166534;font-style:italic;font-size:12px;text-align:right;">IQD ${fmtIQD(svcCheckedOutIQD)}</td>
            <td colspan="2" style="padding:6px 10px;background:#f0fdf4;color:#166534;font-style:italic;font-size:12px;text-align:right;">—</td>
        </tr>`;
        h += vrow('Reservation Deposits (Cash)',       `IQD ${fmtIQD(resCashIQD)}`, `$${fmtUSD(resCashUSD)}`);
        h += vrow('Reservation Deposits (MasterCard)', `IQD ${fmtIQD(resCardIQD)}`, '—');
        h += vrow('Additional Deposits (Cash)',        `IQD ${fmtIQD(adCashIQD)}`,  `$${fmtUSD(adCashUSD)}`);
        h += vrow('Additional Deposits (MasterCard)',  `IQD ${fmtIQD(adCardIQD)}`,  '—');
        h += vrow('Outside Income (Cash)',              `IQD ${fmtIQD(oiIQD)}`,       `$${fmtUSD(oiUSD)}`);
        h += vrow('Outside Income (MasterCard)',       `IQD ${fmtIQD(oiCardIQD)}`,   '—');
        h += vneg('Purchases — Cash (Deducted)',        purchCashIQDShift>0?`- IQD ${fmtIQD(purchCashIQDShift)}`:'—', purchUSD>0?`- $${fmtUSD(purchUSD)}`:'—');
        h += vneg('Purchases — MasterCard (Deducted)', purchCardIQDShift>0?`- IQD ${fmtIQD(purchCardIQDShift)}`:'—', '—');
        h += vneg('Refunds to Guests — Cash (Deducted)', refCashIQD>0?`- IQD ${fmtIQD(refCashIQD)}`:'—', refCashUSD>0?`- $${fmtUSD(refCashUSD)}`:'—');
        h += vneg('Refunds to Guests — MasterCard (Deducted)', refCardIQD>0?`- IQD ${fmtIQD(refCardIQD)}`:'—', '—');
        h += `<tr><td colspan="8" style="padding:4px;"></td></tr>`;
        h += `<tr>
            <td colspan="4" style="padding:11px 10px;font-weight:700;color:#fff;background:${C.grand};font-size:14px;">NET VAULT TOTAL — Cash (IQD)</td>
            <td colspan="4" style="padding:11px 10px;font-weight:700;color:#fff;background:${C.grand};font-size:14px;text-align:right;">IQD ${fmtIQD(grandCashIQD)}</td>
        </tr>`;
        h += `<tr>
            <td colspan="4" style="padding:11px 10px;font-weight:700;color:#fff;background:${C.grand};font-size:14px;">NET VAULT TOTAL — MasterCard (IQD)</td>
            <td colspan="4" style="padding:11px 10px;font-weight:700;color:#fff;background:${C.grand};font-size:14px;text-align:right;">IQD ${fmtIQD(grandCardIQD)}</td>
        </tr>`;
        h += `<tr>
            <td colspan="4" style="padding:11px 10px;font-weight:700;color:#fff;background:${C.grand};font-size:14px;">NET VAULT TOTAL (USD)</td>
            <td colspan="4" style="padding:11px 10px;font-weight:700;color:#fff;background:${C.grand};font-size:14px;text-align:right;">$${fmtUSD(grandUSD)}</td>
        </tr>`;
        h += `</table>`;
        return h;
    }

    // ── Auto-download (used on logout) — skip the modal, just save the Excel file ──
    if (autoExcel) {
        const tableHtml = buildTableHtml(false);
        const fullHtml  = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Shift Report</title></head><body>${tableHtml}</body></html>`;
        const blob = new Blob([fullHtml], { type: 'application/vnd.ms-excel;charset=utf-8;' });
        const url  = URL.createObjectURL(blob);
        const a    = document.createElement('a');
        a.href = url; a.download = `ShiftReport_${(staff).replace(/\s+/g,'_')}_${dateStr}.xls`; a.click();
        URL.revokeObjectURL(url);
        return;
    }

    // ── Show modal ──
    // Remember exactly which shift/staff is being shown (using the *resolved* shift.id, not the
    // possibly-null argument) so a later data change can silently redraw this same shift in place.
    _openShiftReportArgs = { shiftId: shift.id, monthKey: activeMonthKey, staffOverride: staff };
    document.getElementById('shiftReportOverlay')?.remove();
    const overlay = document.createElement('div');
    overlay.id = 'shiftReportOverlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.72);z-index:9999;display:flex;align-items:center;justify-content:center;';

    overlay.innerHTML = `
        <div style="background:#fff;border-radius:16px;width:94vw;max-width:1080px;max-height:92vh;
                    display:flex;flex-direction:column;box-shadow:0 30px 80px rgba(0,0,0,0.45);overflow:hidden;">
            <div style="background:linear-gradient(135deg,#1e3a8a,#2563eb);color:#fff;padding:16px 22px;
                        display:flex;align-items:center;justify-content:space-between;flex-shrink:0;">
                <div>
                    <div style="font-size:17px;font-weight:700;letter-spacing:1px;display:flex;align-items:center;gap:8px;">
                        Shift Report
                        ${isLiveSession ? `<span style="font-size:11px;font-weight:700;background:#dc2626;color:#fff;border-radius:20px;padding:2px 9px;letter-spacing:0.05em;animation:pulse-animation 2s infinite;">&#9679; LIVE NOW</span>` : ''}
                    </div>
                    <div style="font-size:12px;opacity:0.82;margin-top:2px;">${esc(staff)} &mdash; ${esc(shiftLabel)}</div>
                    <div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap;">
                        ${isAdmin ? `<select id="srStaffSelect" style="font-size:12px;padding:4px 8px;border-radius:6px;border:none;background:rgba(255,255,255,0.18);color:#fff;cursor:pointer;">
                            ${staffOptionsHtml}
                        </select>
                        <button id="srCurrentBtn" style="font-size:12px;padding:4px 10px;border-radius:6px;border:none;background:#dc2626;color:#fff;cursor:pointer;font-weight:600;display:flex;align-items:center;gap:5px;">
                            <i class="fas fa-broadcast-tower"></i> Current Session
                        </button>` : ''}
                        <select id="srMonthSelect" style="font-size:12px;padding:4px 8px;border-radius:6px;border:none;background:rgba(255,255,255,0.18);color:#fff;cursor:pointer;">
                            ${monthOptionsHtml}
                        </select>
                        <select id="srShiftSelect" style="font-size:12px;padding:4px 8px;border-radius:6px;border:none;background:rgba(255,255,255,0.18);color:#fff;cursor:pointer;max-width:240px;">
                            ${shiftOptionsHtml}
                        </select>
                    </div>
                </div>
                <div style="display:flex;gap:10px;align-items:center;">
                    <button id="srExcelBtn" style="background:#10b981;color:#fff;border:none;border-radius:8px;
                            padding:8px 16px;font-weight:600;cursor:pointer;font-size:13px;display:flex;align-items:center;gap:6px;">
                        <i class="fas fa-file-excel"></i> Download Excel
                    </button>
                    <button id="srPrintBtn" style="background:#6366f1;color:#fff;border:none;border-radius:8px;
                            padding:8px 16px;font-weight:600;cursor:pointer;font-size:13px;display:flex;align-items:center;gap:6px;">
                        <i class="fas fa-print"></i> Print
                    </button>
                    <button id="srCloseBtn" style="background:rgba(255,255,255,0.18);color:#fff;border:none;
                            border-radius:8px;padding:8px 13px;cursor:pointer;font-size:20px;line-height:1;">&times;</button>
                </div>
            </div>
            <div id="shiftReportContent" style="overflow-y:auto;padding:20px;flex:1;background:#f8fafc;">
                ${buildTableHtml(false)}
            </div>
        </div>`;

    document.body.appendChild(overlay);

    document.getElementById('srCloseBtn').onclick  = () => { _openShiftReportArgs = null; overlay.remove(); };
    overlay.addEventListener('click', e => { if (e.target === overlay) { _openShiftReportArgs = null; overlay.remove(); } });
    document.getElementById('srShiftSelect').onchange = (e) => downloadShiftReport(false, e.target.value, activeMonthKey, staff);
    document.getElementById('srMonthSelect').onchange = (e) => downloadShiftReport(false, null, e.target.value, staff);
    document.getElementById('srStaffSelect')?.addEventListener('change', (e) => downloadShiftReport(false, null, null, e.target.value));
    document.getElementById('srCurrentBtn')?.addEventListener('click', jumpToCurrentSession);

    document.getElementById('srExcelBtn').onclick = () => {
        const tableHtml = buildTableHtml(false);
        const fullHtml  = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Shift Report</title></head><body>${tableHtml}</body></html>`;
        const blob = new Blob([fullHtml], { type: 'application/vnd.ms-excel;charset=utf-8;' });
        const url  = URL.createObjectURL(blob);
        const a    = document.createElement('a');
        a.href = url; a.download = `ShiftReport_${(staff).replace(/\s+/g,'_')}_${dateStr}.xls`; a.click();
        URL.revokeObjectURL(url);
    };

    document.getElementById('srPrintBtn').onclick = () => {
        const tableHtml = buildTableHtml(true);
        const pw = window.open('', '_blank', 'width=960,height=750');
        pw.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Shift Report — ${esc(staff)}</title>
        <style>
            body { margin: 20px; font-family: Arial, sans-serif; }
            table { border-collapse: collapse; width: 100%; font-size: 11px; }
            td { border: 1px solid #bbb; padding: 5px 7px; }
            @media print {
                body { margin: 10mm; }
                button { display: none !important; }
            }
        </style></head><body>
        ${tableHtml}
        <br>
        <button onclick="window.print()" style="margin-top:12px;padding:10px 28px;font-size:14px;cursor:pointer;
                background:#333;color:#fff;border:none;border-radius:6px;">
            Print / Save as PDF
        </button>
        </body></html>`);
        pw.document.close();
        setTimeout(() => pw.print(), 600);
    };
}

function logout() {
    if (!confirm(t('logout_confirm') || 'Are you sure you want to logout?')) return;
    if (loggedInUser && (loggedInUser.role === 'reception' || loggedInUser.role === 'admin')) {
        const closedShiftId = endShiftSession();
        downloadShiftReport(true, closedShiftId);
    }
    if (window.fbDb) window.fbDb.ref('hotelData').off();
    window.fbAuth.signOut().then(() => {
        sessionStorage.removeItem('loggedInUser');
        loggedInUser = null;
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPassword').value = '';
        showLogin();
    });
}

// ==================== STORAGE ====================
// Marks an id as deliberately deleted (room or guest) so a later merge (see saveDataToStorage)
// never resurrects it just because some tab's local copy doesn't have it. Pruned to the last 500
// so this list can't grow forever.
function recordTombstone(listName, id) {
    if (!Array.isArray(hotelData[listName])) hotelData[listName] = [];
    hotelData[listName].push({ id, deletedAt: new Date().toISOString() });
    if (hotelData[listName].length > 500) hotelData[listName] = hotelData[listName].slice(-500);
}

// Rooms and guests are the two collections every role touches constantly and concurrently —
// reception checking a guest in on the front-desk terminal while a cleaner's tablet (which may
// have been sitting idle/backgrounded for a while, delaying its realtime sync) marks a different
// room clean, for instance. A plain .set(hotelData) replaces the ENTIRE database with whatever
// this one browser tab currently has in memory — so if that tab's copy is even slightly behind,
// saving from it silently erases any room/guest that changed elsewhere in the meantime (a stale
// tab's local currentGuest:null on some room "wins" and wipes out today's real occupant, etc.).
// To close that window, pull the freshest rooms/guests from the server immediately before writing
// and fold in anything the local copy doesn't know about yet, so an idle tab can't erase someone
// else's more recent work just because it doesn't know about it yet. Anything in the matching
// tombstone list is excluded from being folded back in — that's a deliberate deletion, not staleness.
function saveDataToStorage() {
    if (!(window.fbDb && loggedInUser)) return;
    window.fbDb.ref('hotelData').once('value').then(snap => {
        const server = snap.val() || {};
        const mergeUnknownIn = (localArr, serverArr, tombstoneList) => {
            const localIds = new Set((localArr || []).map(x => x.id));
            const deletedIds = new Set((tombstoneList || []).map(t => t.id));
            const missingFromLocal = serverArr.filter(x => !localIds.has(x.id) && !deletedIds.has(x.id));
            return [...missingFromLocal, ...(localArr || [])];
        };
        hotelData.rooms  = mergeUnknownIn(hotelData.rooms,  toArr(server.rooms),  hotelData.deletedRoomIds);
        hotelData.guests = mergeUnknownIn(hotelData.guests, toArr(server.guests), hotelData.deletedGuestIds);
        window.fbDb.ref('hotelData').set(hotelData).catch(() => {});
    }).catch(() => {
        // Offline or the read failed — still try to save rather than losing the change entirely.
        window.fbDb.ref('hotelData').set(hotelData).catch(() => {});
    });
}

function loadDataFromStorage() {
    try {
        const stored = localStorage.getItem('hotelData');
        if (stored) {
            const parsed = JSON.parse(stored);
            const rawStatuses = (parsed.settings && parsed.settings.roomStatuses) || hotelData.settings.roomStatuses;
            hotelData = {
                ...hotelData,
                ...parsed,
                settings: {
                    ...hotelData.settings,
                    ...(parsed.settings || {}),
                    roomTypes: (parsed.settings && parsed.settings.roomTypes) || hotelData.settings.roomTypes,
                    serviceCategories: (parsed.settings && parsed.settings.serviceCategories) || hotelData.settings.serviceCategories,
                    roomStatuses: ensureDefaultRoomStatuses(rawStatuses)
                },
                purchases: parsed.purchases || [],
                outsideIncome: parsed.outsideIncome || [],
                shiftLog: parsed.shiftLog || [],
                activities: parsed.activities || [],
                rooms: migrateRoomStatuses(parsed.rooms || [], rawStatuses),
                guests: parsed.guests || [],
                orders: parsed.orders || [],
                priceHistory: parsed.priceHistory || [],
                users: (parsed.users && parsed.users.length) ? parsed.users : hotelData.users
            };
        }
    } catch (e) {
        console.error('Error loading data:', e);
    }
}

// ==================== ORDER MANAGEMENT ====================
function handleOrderSubmit(e) {
    e.preventDefault();
    if (!requireOnline()) return;
    const category = document.getElementById('orderCategory').value;
    const itemName = document.getElementById('orderItemName').value.trim();
    const order = {
        id: Math.random().toString(36).substring(2, 11),
        category,
        name: itemName || category,
        quantity: parseInt(document.getElementById('orderQuantity').value),
        price: parseFloat(document.getElementById('orderPrice').value.replace(/,/g, '')),
        timestamp: new Date().toISOString(),
        addedBy: loggedInUser ? (loggedInUser.name || loggedInUser.email || loggedInUser.role || 'Unknown') : 'Unknown'
    };

    if (selectedRoom) {
        const guest = hotelData.guests.find(g => g.id === selectedRoom.currentGuest.id);
        if (guest) {
            if (!Array.isArray(guest.orders)) guest.orders = [];
            guest.orders.push(order);
            saveDataToStorage();
            showToast(t('toast_service_added'), 'success');
            closeModal('orderModal');
            // Refresh whichever page is currently visible
            const servicesVisible = document.getElementById('services').style.display !== 'none';
            if (servicesVisible) loadServicesPage();
        }
    }
}

function viewRoomDetails(roomId) {
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room) return;

    const cfg = getStatusConfig(room.status);
    const locale = currentLang === 'ar' ? 'ar-IQ' : 'en-US';
    const statusLabel = cfg.label;
    let guestHtml = '';
    if (room.status === 'occupied' && room.currentGuest) {
        const guest = hotelData.guests.find(g => g.id === room.currentGuest.id);
        if (guest) {
            const checkIn = new Date(guest.checkIn).toLocaleString(locale);
            const checkOut = guest.checkOut ? new Date(guest.checkOut).toLocaleString(locale) : t('open_label');
            guestHtml = `
                <div style="background:#f0fdf4;border-left:4px solid #10b981;border-radius:8px;padding:14px;margin-top:16px;">
                    <p class="font-semibold text-gray-700 mb-2"><i class="fas fa-user mr-2 text-green-600"></i>${t('current_guest_label')}</p>
                    <p><span class="text-gray-500">${t('label_full_name')}:</span> <strong>${guest.name}</strong></p>
                    <p><span class="text-gray-500">${t('phone_label')}:</span> ${guest.phone || '-'}</p>
                    <p><span class="text-gray-500">${t('check_in_label')}:</span> ${checkIn}</p>
                    <p><span class="text-gray-500">${t('check_out_label')}:</span> ${checkOut}</p>
                    <p><span class="text-gray-500">${t('label_num_guests')}:</span> ${guest.numGuests}</p>
                </div>`;
        }
    }

    document.getElementById('roomInfoContent').innerHTML = `
        <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="info-item"><div class="info-label">${t('label_room_number')}</div><div class="info-value">${t('room_prefix')} ${room.number}</div></div>
            <div class="info-item"><div class="info-label">${t('col_type')}</div><div class="info-value">${room.type}</div></div>
            <div class="info-item"><div class="info-label">${t('floor_label')}</div><div class="info-value">${t('floor_prefix')} ${room.floor}</div></div>
            <div class="info-item"><div class="info-label">${t('capacity_label')}</div><div class="info-value">${room.capacity} ${t('guests_label')}</div></div>
            <div class="info-item"><div class="info-label">${t('per_night')}</div><div class="info-value">IQD ${fmtIQD(room.price)}</div></div>
            <div class="info-item"><div class="info-label">Status</div><div class="info-value"><span style="background:${cfg.color}22;color:${cfg.color};padding:4px 10px;border-radius:9999px;font-size:0.75rem;font-weight:700;">${statusLabel}</span></div></div>
        </div>
        ${room.description ? `<p class="text-gray-600 text-sm mb-4">${room.description}</p>` : ''}
        ${guestHtml}
        <div class="flex gap-3 mt-6">
            <button onclick="closeModal('roomInfoModal');openRoomModal(${room.id})" class="btn btn-secondary flex-1"><i class="fas fa-edit"></i> ${t('btn_edit_room')}</button>
            <button onclick="closeModal('roomInfoModal')" class="btn btn-primary flex-1"><i class="fas fa-check"></i> ${t('close')}</button>
        </div>`;

    openModal('roomInfoModal');
}

// New function for adding orders during checkout
function openCheckoutOrderModal(roomId) {
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room || !room.currentGuest) return;

    selectedRoom = room;
    _populateOrderModal();
    openModal('orderModal');
}

// Function to modify checkout date and recalculate pricing
function modifyCheckoutDate(roomId, newDateString) {
    const room = hotelData.rooms.find(r => r.id === roomId);
    const guest = hotelData.guests.find(g => g.id === room.currentGuest.id);

    if (!room || !guest) return;

    const newCheckOutDate = new Date(newDateString);
    const checkInDate = new Date(guest.checkIn);

    // Validate: checkout date must be after check-in date
    if (newCheckOutDate <= checkInDate) {
        showToast(t('toast_checkout_after'), 'error');
        document.getElementById('checkoutDateModify').value = toLocalDateTimeString(new Date(guest.checkOut));
        return;
    }

    // Update the guest's checkout date
    guest.checkOut = toLocalDateTimeString(newCheckOutDate);
    saveDataToStorage();

    // Reload the checkout form with updated pricing
    loadCheckOutForm(roomId);
    showToast(t('toast_checkout_updated'), 'success');
}

// Function to remove an accidentally added order
function removeOrder(roomId, orderId) {
    const room = hotelData.rooms.find(r => r.id === roomId);
    const guest = hotelData.guests.find(g => g.id === room.currentGuest.id);

    if (!room || !guest) return;

    const orderIndex = guest.orders.findIndex(o => o.id === orderId);
    if (orderIndex === -1) return;

    const orderName = guest.orders[orderIndex].name;
    guest.orders.splice(orderIndex, 1);
    saveDataToStorage();

    // Reload the checkout form with updated totals
    loadCheckOutForm(roomId);
    showToast(`"${orderName}" removed from order!`, 'success');
}

// ==================== EXPORT FUNCTIONALITY ====================
function openExportModal() {
    const sel = document.getElementById('exportUserFilter');
    if (sel) {
        sel.innerHTML = '<option value="all">All Users</option>';
        (hotelData.users || []).forEach(u => {
            const opt = document.createElement('option');
            opt.value = u.name || u.email;
            opt.textContent = `${u.name} (${u.role})`;
            sel.appendChild(opt);
        });
    }
    setExportRange('all');
    openModal('exportModal');
}

function setExportRange(type) {
    const today = new Date();
    const fmt = d => d.toISOString().split('T')[0];
    let from;
    const to = fmt(today);
    if (type === 'today') {
        from = to;
    } else if (type === 'week') {
        const d = new Date(today); d.setDate(d.getDate() - 7); from = fmt(d);
    } else if (type === 'month') {
        from = fmt(new Date(today.getFullYear(), today.getMonth(), 1));
    } else if (type === 'year') {
        from = fmt(new Date(today.getFullYear(), 0, 1));
    } else {
        from = '2000-01-01';
    }
    const el = id => document.getElementById(id);
    if (el('exportDateFrom')) el('exportDateFrom').value = from;
    if (el('exportDateTo'))   el('exportDateTo').value = to;
}

function executeExport() {
    ensureXLSX().then(() => {
        if (!window.XLSX) { showToast('Excel library not loaded. Try again.', 'error'); return; }

        const fromStr = document.getElementById('exportDateFrom')?.value;
        const toStr   = document.getElementById('exportDateTo')?.value;
        const userFilter = document.getElementById('exportUserFilter')?.value || 'all';

        const fromDate = fromStr ? new Date(fromStr + 'T00:00:00') : new Date(0);
        const toDate   = toStr   ? new Date(toStr   + 'T23:59:59') : new Date();

        const inRange = d => { if (!d) return false; const dt = new Date(d); return dt >= fromDate && dt <= toDate; };
        const userMatch = n => userFilter === 'all' || n === userFilter;

        const wb    = XLSX.utils.book_new();
        const hotel = hotelData.settings?.hotelName || 'Hotel';
        const range = `${fromDate.toLocaleDateString()} – ${toDate.toLocaleDateString()}`;
        const sel   = id => document.getElementById(id)?.checked;

        const addSheet = (name, rows, widths) => {
            const ws = XLSX.utils.aoa_to_sheet(rows);
            if (widths) ws['!cols'] = widths.map(w => ({ wch: w }));
            XLSX.utils.book_append_sheet(wb, ws, name);
        };

        const allGuests  = hotelData.guests || [];
        const checkins   = allGuests.filter(g => inRange(g.checkIn) && userMatch(g.checkedInBy));
        const checkouts  = allGuests.filter(g => g.checkedOutAt && inRange(g.checkedOutAt) && userMatch(g.checkedOutBy));
        const resLog     = (hotelData.reservationLog || []).filter(e => inRange(e.reservedAt) && userMatch(e.reservedBy));
        const purchases  = (hotelData.purchases || []).filter(p => inRange(p.date));
        const activities = (hotelData.activities || []).filter(a => inRange(a.timestamp) && userMatch(a.userName));

        // ── SUMMARY ──
        // Split strictly by how the money was actually collected (Cash IQD / Cash $ / MasterCard
        // IQD), not by what currency the room happened to be listed in — a $100 room paid for in
        // Iraqi cash is IQD income, not USD. Deposits and checkout payments (which already include
        // room charges + services) are combined into one figure per channel, no separate deposit line.
        if (sel('exp_summary')) {
            let cashIQD = 0, cashUSD = 0, cardIQD = 0;
            // Subtract depositCarry* — already counted below under resLog (reservation deposits).
            checkins.forEach(g => { cashIQD += (g.depositCashIQD||0)-(g.depositCarryCashIQD||0); cashUSD += (g.depositCashUSD||0)-(g.depositCarryCashUSD||0); cardIQD += (g.depositCardIQD||0)-(g.depositCarryCardIQD||0); });
            // Subtract refund* — change handed back from an overpaid deposit leaves the vault.
            checkouts.forEach(g => { cashIQD += (g.checkoutCashIQD||0)-(g.refundCashIQD||0); cashUSD += (g.checkoutCashUSD||0)-(g.refundCashUSD||0); cardIQD += (g.checkoutCardIQD||0)-(g.refundCardIQD||0); });
            resLog.forEach(e => { cashIQD += e.depositCashIQD||0; cashUSD += e.depositCashUSD||0; cardIQD += e.depositCardIQD||0; });
            const refundCashIQD = checkouts.reduce((s,g)=>s+(g.refundCashIQD||0),0);
            const refundCashUSD = checkouts.reduce((s,g)=>s+(g.refundCashUSD||0),0);
            const refundCardIQD = checkouts.reduce((s,g)=>s+(g.refundCardIQD||0),0);
            const pCashIQD = purchases.reduce((s,p) => { const v = p.priceIQD!=null?p.priceIQD:(p.price||0); return s+v; }, 0);
            const pCardIQD = purchases.reduce((s,p) => s+(p.priceCardIQD||0), 0);
            const pUSD = purchases.reduce((s,p) => s+(p.priceUSD||0), 0);
            // Outside income (e.g. hotel-run side revenue not tied to a guest stay) — must be added
            // back in, the same way the on-screen Reports dashboard does, otherwise the exported
            // NET REVENUE undercounts by exactly however much outside income came in this period.
            const oi = (hotelData.outsideIncome || []).filter(p => inRange(p.date));
            const oiCashIQD = oi.reduce((s,p) => s+(p.priceIQD||0), 0);
            const oiCashUSD = oi.reduce((s,p) => s+(p.priceUSD||0), 0);
            const oiCardIQD = oi.reduce((s,p) => s+(p.priceCardIQD||0), 0);
            addSheet('Summary', [
                [`${hotel} — Export Report`],
                ['Period:', range],
                ['Generated:', new Date().toLocaleString()],
                ['Generated by:', loggedInUser?.name || '—'],
                ['User filter:', userFilter === 'all' ? 'All Users' : userFilter],
                [],
                ['FINANCIAL SUMMARY — by payment method', 'Amount'],
                ['Total Income — Cash (IQD)', `IQD ${fmtIQD(cashIQD)}`],
                ['Total Income — Cash ($)', `$${cashUSD.toFixed(2)}`],
                ['Total Income — MasterCard (IQD)', `IQD ${fmtIQD(cardIQD)}`],
                ['Total Outside Income — Cash (IQD)', `IQD ${fmtIQD(oiCashIQD)}`],
                ['Total Outside Income — Cash ($)', `$${oiCashUSD.toFixed(2)}`],
                ['Total Outside Income — MasterCard (IQD)', `IQD ${fmtIQD(oiCardIQD)}`],
                ['Total Purchases — Cash (IQD)', `IQD ${fmtIQD(pCashIQD)}`],
                ['Total Purchases — MasterCard (IQD)', `IQD ${fmtIQD(pCardIQD)}`],
                ['Total Purchases ($)', `$${pUSD.toFixed(2)}`],
                ['Total Refunded to Guests — Cash (IQD)', `IQD ${fmtIQD(refundCashIQD)}`],
                ['Total Refunded to Guests — Cash ($)', `$${refundCashUSD.toFixed(2)}`],
                ['Total Refunded to Guests — MasterCard (IQD)', `IQD ${fmtIQD(refundCardIQD)}`],
                ['NET REVENUE — Cash (IQD)', `IQD ${fmtIQD(cashIQD + oiCashIQD - pCashIQD)}`],
                ['NET REVENUE — Cash ($)', `$${(cashUSD + oiCashUSD - pUSD).toFixed(2)}`],
                ['NET REVENUE — MasterCard (IQD)', `IQD ${fmtIQD(cardIQD + oiCardIQD - pCardIQD)}`],
                [],
                ['OPERATIONAL SUMMARY', 'Count'],
                ['Check-ins (period)', checkins.length],
                ['Check-outs (period)', checkouts.length],
                ['Reservations (period)', resLog.length],
                ['  ↳ Active', resLog.filter(e => e.status==='active').length],
                ['  ↳ Cancelled', resLog.filter(e => e.status==='cancelled').length],
                ['Purchases (period)', purchases.length],
                ['Activities logged', activities.length],
            ], [32, 22]);
        }

        // ── CHECK-INS ──
        if (sel('exp_checkins')) {
            const rows = [['#','Guest Name','Phone','Nationality','ID Type','ID Number','Room','Type','Floor','Check-in','Exp. Checkout','Nights','Rate/Night (IQD)','Rate/Night ($)','Deposit (IQD)','Deposit ($)','Guests','Checked In By']];
            checkins.forEach((g, i) => {
                const room = hotelData.rooms.find(r => r.id === g.roomId);
                const nights = g.checkIn && g.checkOut ? Math.ceil((new Date(g.checkOut)-new Date(g.checkIn))/86400000) : '—';
                rows.push([i+1, g.name||'—', g.phone||'—', g.nationality||'—', g.idType||'—', g.idNumber||'—',
                    room?`Room ${room.number}`:'—', room?room.type:'—', room?room.floor:'—',
                    g.checkIn?new Date(g.checkIn).toLocaleString():'—',
                    g.checkOut?new Date(g.checkOut).toLocaleString():'—',
                    nights, g.basePriceIQD||0, g.basePriceUSD||0,
                    g.depositIQD||0, g.depositUSD||0,
                    g.numGuests||1, g.checkedInBy||'—']);
            });
            if (rows.length===1) rows.push(['No check-ins in this period']);
            addSheet('Check-ins', rows, [4,18,14,14,12,14,10,14,6,20,20,7,16,12,14,12,7,16]);
        }

        // ── CHECK-OUTS ──
        if (sel('exp_checkouts')) {
            // "Room Price" below is just the listed nightly rate for reference — the Collected
            // columns are what was *actually* paid at checkout, by method, which is what counts as
            // real IQD/USD/MasterCard income (a $100 room paid for in IQD cash is IQD income).
            const rows = [['#','Guest Name','Phone','Room','Type','Check-in','Check-out','Nights','Room Price (listed)','Services (IQD)','Collected Cash (IQD)','Collected Cash ($)','Collected MasterCard (IQD)','Payment','Note','Checked Out By']];
            checkouts.forEach((g, i) => {
                const room = hotelData.rooms.find(r => r.id === g.roomId);
                const nights = g.checkIn && g.checkedOutAt ? Math.ceil((new Date(g.checkedOutAt)-new Date(g.checkIn))/86400000) : '—';
                const svc = g.serviceAmountIQD || 0;
                const listedPrice = g.roomCurrency==='IQD' ? `IQD ${fmtIQD(g.roomAmountPaid||0)}` : `$${(g.roomAmountPaid||0).toFixed(2)}`;
                rows.push([i+1, g.name||'—', g.phone||'—',
                    room?`Room ${room.number}`:'—', room?room.type:'—',
                    g.checkIn?new Date(g.checkIn).toLocaleString():'—',
                    g.checkedOutAt?new Date(g.checkedOutAt).toLocaleString():'—',
                    nights,
                    listedPrice,
                    svc>0?`IQD ${fmtIQD(svc)}`:'—',
                    g.checkoutCashIQD>0?`IQD ${fmtIQD(g.checkoutCashIQD)}`:'—',
                    g.checkoutCashUSD>0?`$${g.checkoutCashUSD.toFixed(2)}`:'—',
                    g.checkoutCardIQD>0?`IQD ${fmtIQD(g.checkoutCardIQD)}`:'—',
                    g.paymentMethod||'—', g.checkoutNote||'—', g.checkedOutBy||'—']);
            });
            if (rows.length===1) rows.push(['No check-outs in this period']);
            addSheet('Check-outs', rows, [4,18,13,10,13,20,20,7,16,14,16,14,18,14,20,16]);
        }

        // ── RESERVATIONS ──
        if (sel('exp_reservations')) {
            const rows = [['#','Room','Guest Name','Phone','Reserved At','Arrival Date','Deposit (IQD)','Deposit ($)','Status','Cancelled At','Reserved By']];
            resLog.forEach((e, i) => {
                const depI = (e.depositIQD||0)>0 ? `IQD ${fmtIQD(e.depositIQD)}` : '—';
                const depU = (e.depositUSD||0)>0 ? `$${e.depositUSD.toFixed(2)}` : '—';
                rows.push([i+1, `Room ${e.roomNumber}`, e.guestName||'—', e.phone||'—',
                    e.reservedAt?new Date(e.reservedAt).toLocaleString():'—',
                    e.arrivalDate?new Date(e.arrivalDate).toLocaleString():'—',
                    depI, depU,
                    e.status==='cancelled'?'Cancelled':'Active',
                    e.cancelledAt?new Date(e.cancelledAt).toLocaleString():'—',
                    e.reservedBy||'—']);
            });
            if (rows.length===1) rows.push(['No reservations in this period']);
            const tI = resLog.reduce((s,e)=>s+(e.depositIQD||0),0);
            const tU = resLog.reduce((s,e)=>s+(e.depositUSD||0),0);
            rows.push([], ['','','','','','TOTAL DEPOSITS:',`IQD ${fmtIQD(tI)}`,`$${tU.toFixed(2)}`]);
            addSheet('Reservations', rows, [4,10,18,14,20,20,16,12,10,20,16]);
        }

        // ── PURCHASES ──
        if (sel('exp_purchases')) {
            const rows = [['#','Item Name','Price (IQD)','Price ($)','Notes','Date']];
            let tI=0, tU=0;
            purchases.forEach((p, i) => {
                const iqd=p.priceIQD!=null?p.priceIQD:(p.price||0), usd=p.priceUSD||0;
                tI+=iqd; tU+=usd;
                rows.push([i+1, p.name||'—',
                    iqd>0?`IQD ${fmtIQD(iqd)}`:'—',
                    usd>0?`$${fmtUSD(usd)}`:'—',
                    p.notes||'—',
                    p.date?new Date(p.date).toLocaleDateString():'—']);
            });
            if (rows.length===1) rows.push(['No purchases in this period']);
            rows.push([], ['','TOTALS:',`IQD ${fmtIQD(tI)}`,`$${fmtUSD(tU)}`,'','']);
            addSheet('Purchases', rows, [4,24,16,14,24,14]);
        }

        // ── REVENUE BY ROOM ──
        // Same fix as the Summary sheet: split by how it was actually paid (Cash IQD / Cash $ /
        // MasterCard IQD), not by the room's listed price currency. "Services" is shown for
        // reference only — it's already included inside Collected Cash/MasterCard (checkout
        // payments cover room + services together), so it isn't added again into the totals.
        if (sel('exp_revenue')) {
            const rows = [['#','Room','Type','Floor','Stays','Collected Cash (IQD)','Collected Cash ($)','Collected MasterCard (IQD)','Services (IQD, included above)']];
            let tCashIQD=0, tCashUSD=0, tCardIQD=0, tS=0;
            hotelData.rooms.forEach((room, i) => {
                const stays = allGuests.filter(g => g.roomId===room.id && g.checkedOutAt && inRange(g.checkedOutAt));
                const cashIQD = stays.reduce((s,g)=>s+(g.checkoutCashIQD||0),0);
                const cashUSD = stays.reduce((s,g)=>s+(g.checkoutCashUSD||0),0);
                const cardIQD = stays.reduce((s,g)=>s+(g.checkoutCardIQD||0),0);
                const sv = stays.reduce((s,g)=>s+(g.serviceAmountIQD||0),0);
                const roomRes = (hotelData.reservationLog||[]).filter(e=>e.roomId===room.id && inRange(e.reservedAt));
                const resCashIQD = roomRes.reduce((s,e)=>s+(e.depositCashIQD||0),0);
                const resCashUSD = roomRes.reduce((s,e)=>s+(e.depositCashUSD||0),0);
                const resCardIQD = roomRes.reduce((s,e)=>s+(e.depositCardIQD||0),0);
                // Check-in deposits for this room (all guests who checked in). Subtract depositCarry*
                // — already counted above under resCashIQD/resCashUSD/resCardIQD (reservation deposits).
                const roomGuests = allGuests.filter(g => g.roomId===room.id && inRange(g.checkIn));
                const ciCashIQD = roomGuests.reduce((s,g)=>s+(g.depositCashIQD||0)-(g.depositCarryCashIQD||0),0);
                const ciCashUSD = roomGuests.reduce((s,g)=>s+(g.depositCashUSD||0)-(g.depositCarryCashUSD||0),0);
                const ciCardIQD = roomGuests.reduce((s,g)=>s+(g.depositCardIQD||0)-(g.depositCarryCardIQD||0),0);

                const totalCashIQD = cashIQD + resCashIQD + ciCashIQD;
                const totalCashUSD = cashUSD + resCashUSD + ciCashUSD;
                const totalCardIQD = cardIQD + resCardIQD + ciCardIQD;
                tCashIQD+=totalCashIQD; tCashUSD+=totalCashUSD; tCardIQD+=totalCardIQD; tS+=sv;

                rows.push([i+1,`Room ${room.number}`,room.type,room.floor,stays.length,
                    totalCashIQD>0?`IQD ${fmtIQD(totalCashIQD)}`:'—',
                    totalCashUSD>0?`$${totalCashUSD.toFixed(2)}`:'—',
                    totalCardIQD>0?`IQD ${fmtIQD(totalCardIQD)}`:'—',
                    sv>0?`IQD ${fmtIQD(sv)}`:'—']);
            });
            rows.push([],['','TOTALS','','','',`IQD ${fmtIQD(tCashIQD)}`,`$${tCashUSD.toFixed(2)}`,`IQD ${fmtIQD(tCardIQD)}`,`IQD ${fmtIQD(tS)}`]);
            addSheet('Revenue by Room', rows, [4,10,14,6,6,18,14,20,22]);
        }

        // ── SERVICES (grouped by guest/room) ──
        if (sel('exp_services')) {
            // Column header row
            const rows = [
                ['Room', 'Guest Name', 'Service / Item', 'Category', 'Qty', 'Price (IQD)', 'Total (IQD)', 'Date & Time', 'Added By']
            ];
            let grandTotal = 0;
            let hasAny = false;

            const guestsWithOrders = allGuests.filter(g =>
                inRange(g.checkIn) &&
                userMatch(g.checkedInBy) &&
                (g.orders || []).length > 0
            );

            guestsWithOrders.forEach(g => {
                const room = hotelData.rooms.find(r => r.id === g.roomId);
                const roomLabel = room ? `Room ${room.number}` : '(Room removed)';
                const orders = g.orders || [];
                const guestTotal = orders.reduce((s, o) => s + (o.price||0)*(o.quantity||1), 0);
                grandTotal += guestTotal;
                hasAny = true;

                const checkIn  = g.checkIn      ? new Date(g.checkIn).toLocaleDateString()      : '—';
                const checkOut = g.checkedOutAt  ? new Date(g.checkedOutAt).toLocaleDateString() : (g.checkOut ? new Date(g.checkOut).toLocaleDateString() : 'Still in');

                // ── Guest/Room header row ──
                rows.push([
                    roomLabel,
                    g.name || '—',
                    `Check-in: ${checkIn}  →  Check-out: ${checkOut}`,
                    '',
                    '',
                    '',
                    `Guest Total: IQD ${fmtIQD(guestTotal)}`,
                    '',
                    ''
                ]);

                // ── Service child rows (indented: cols A & B blank) ──
                orders.forEach(o => {
                    const total   = (o.price||0) * (o.quantity||1);
                    const ts      = o.timestamp ? new Date(o.timestamp).toLocaleString() : '—';
                    const addedBy = o.addedBy || g.checkedInBy || '—';
                    rows.push([
                        '',
                        '',
                        `  ↳  ${o.name || '—'}`,
                        o.category || '—',
                        o.quantity || 1,
                        `IQD ${fmtIQD(o.price || 0)}`,
                        `IQD ${fmtIQD(total)}`,
                        ts,
                        addedBy
                    ]);
                });

                // blank separator between guests
                rows.push(['', '', '', '', '', '', '', '', '']);
            });

            if (!hasAny) rows.push(['No services recorded in this period']);

            // Grand total row
            rows.push(['', '', '', '', '', 'GRAND TOTAL:', `IQD ${fmtIQD(grandTotal)}`, '', '']);

            addSheet('Services', rows, [16, 18, 32, 14, 5, 16, 18, 20, 16]);
        }

        // ── ACTIVITY LOG ──
        if (sel('exp_activities')) {
            const rows = [['#','Date & Time','Description','User','Role','Room','Action','Amount']];
            activities.forEach((a, i) => {
                rows.push([i+1,
                    a.timestamp?new Date(a.timestamp).toLocaleString():'—',
                    a.description||'—', a.userName||'—', a.userRole||'—',
                    a.roomNumber||'—', a.action||'—',
                    a.amount!=null?String(a.amount):'—']);
            });
            if (rows.length===1) rows.push(['No activities in this period']);
            addSheet('Activity Log', rows, [4,20,42,16,12,8,14,12]);
        }

        if (wb.SheetNames.length===0) { showToast('Select at least one report type.','error'); return; }

        const uTag = userFilter!=='all' ? `-${userFilter.replace(/\s+/g,'_')}` : '';
        const filename = `${hotel}-Report${uTag}-${new Date().toISOString().split('T')[0]}.xlsx`;
        XLSX.writeFile(wb, filename);
        closeModal('exportModal');
        showToast(`Exported ${wb.SheetNames.length} sheet(s) successfully!`, 'success');
    });
}

function getDateRange(period) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let startDate;

    switch(period) {
        case 'daily':
            startDate = new Date(today);
            break;
        case 'weekly':
            startDate = new Date(today);
            startDate.setDate(startDate.getDate() - 7);
            break;
        case 'monthly':
            startDate = new Date(today);
            startDate.setMonth(startDate.getMonth() - 1);
            break;
        case 'yearly':
            startDate = new Date(today);
            startDate.setFullYear(startDate.getFullYear() - 1);
            break;
        default:
            startDate = new Date(0);
    }

    return { startDate, endDate: now };
}

function filterDataByDateRange(startDate, endDate) {
    const filteredGuests = hotelData.guests.filter(guest => {
        const checkedOutDate = guest.checkedOutAt ? new Date(guest.checkedOutAt) : new Date(guest.checkOut);
        return checkedOutDate >= startDate && checkedOutDate <= endDate;
    });

    const filteredActivities = hotelData.activities.filter(activity => {
        const activityDate = new Date(activity.timestamp);
        return activityDate >= startDate && activityDate <= endDate;
    });

    return { filteredGuests, filteredActivities };
}

function createStyledWorkbook(period, startDate, endDate, filteredGuests, filteredActivities) {
    const wb = XLSX.utils.book_new();

    // Sheet 1: Summary Dashboard
    const summaryData = [
        [`${hotelData.settings.hotelName} - ${period.toUpperCase()} Report`],
        [],
        ["Report Period", `${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`],
        ["Generated On", new Date().toLocaleString()],
        [],
        ["SUMMARY METRICS"],
        ["Total Guests", filteredGuests.length],
        ["Total Revenue", `${hotelData.settings.currencySymbol}${filteredGuests.reduce((sum, g) => sum + (g.totalSpent || 0), 0).toFixed(2)}`],
        ["Average Stay Value", `${hotelData.settings.currencySymbol}${(filteredGuests.reduce((sum, g) => sum + (g.totalSpent || 0), 0) / Math.max(filteredGuests.length, 1)).toFixed(2)}`],
        ["Total Orders", filteredGuests.reduce((sum, g) => sum + g.orders.length, 0)],
    ];

    const summaryWs = XLSX.utils.aoa_to_sheet(summaryData);
    summaryWs['!cols'] = [{ wch: 25 }, { wch: 35 }];
    XLSX.utils.book_append_sheet(wb, summaryWs, "Summary");

    // Sheet 2: Guest Details
    const guestHeaders = ["Guest Name", "Phone", "Email", "Room", "Check-In", "Check-Out", "Nights", "Total Spent", "Discount", "Orders"];
    const guestData = [guestHeaders];

    filteredGuests.forEach((guest) => {
        const room = hotelData.rooms.find(r => r.id === guest.roomId);
        const roomNumber = room ? room.number : 'N/A';
        const nights = Math.ceil((new Date(guest.checkOut) - new Date(guest.checkIn)) / (1000 * 60 * 60 * 24));
        const orderCount = guest.orders.length;
        const discountText = guest.discountType === 'percentage' ? `${guest.discount}%` : `${hotelData.settings.currencySymbol}${guest.discount}`;

        guestData.push([
            guest.name,
            guest.phone,
            guest.email,
            roomNumber,
            new Date(guest.checkIn).toLocaleString(),
            new Date(guest.checkOut).toLocaleString(),
            nights,
            `${hotelData.settings.currencySymbol}${(guest.totalSpent || 0).toFixed(2)}`,
            discountText,
            orderCount
        ]);
    });

    const guestWs = XLSX.utils.aoa_to_sheet(guestData);
    guestWs['!cols'] = [{ wch: 18 }, { wch: 14 }, { wch: 20 }, { wch: 8 }, { wch: 20 }, { wch: 20 }, { wch: 8 }, { wch: 14 }, { wch: 12 }, { wch: 8 }];
    XLSX.utils.book_append_sheet(wb, guestWs, "Guest Details");

    // Sheet 3: Orders Summary
    const allOrders = filteredGuests.flatMap(g => g.orders.map(o => ({ ...o, guestName: g.name })));
    const orderHeaders = ["Guest Name", "Order Item", "Quantity", "Unit Price", "Total Amount"];
    const orderData = [orderHeaders];

    if (allOrders.length > 0) {
        const totalOrderRevenue = allOrders.reduce((sum, o) => sum + (o.price * o.quantity), 0);

        allOrders.forEach((order) => {
            const total = order.price * order.quantity;
            orderData.push([
                order.guestName,
                order.name,
                order.quantity,
                `${hotelData.settings.currencySymbol}${order.price.toFixed(2)}`,
                `${hotelData.settings.currencySymbol}${total.toFixed(2)}`
            ]);
        });

        // Add total row
        orderData.push([
            "",
            "TOTAL ORDERS REVENUE",
            "",
            "",
            `${hotelData.settings.currencySymbol}${totalOrderRevenue.toFixed(2)}`
        ]);
    } else {
        orderData.push(["No orders in this period"]);
    }
    const orderWs = XLSX.utils.aoa_to_sheet(orderData);
    orderWs['!cols'] = [{ wch: 18 }, { wch: 20 }, { wch: 10 }, { wch: 12 }, { wch: 14 }];
    XLSX.utils.book_append_sheet(wb, orderWs, "Orders");

    // Sheet 4: Activities Log
    const activityHeaders = ["Date & Time", "Description", "Action", "Room", "Guest Name", "Amount"];
    const activityData = [activityHeaders];

    filteredActivities.forEach((activity) => {
        const timestamp = new Date(activity.timestamp).toLocaleString();
        const room = activity.roomNumber || '-';
        const guestName = activity.guestName || '-';
        const amount = activity.amount ? `${hotelData.settings.currencySymbol}${activity.amount.toFixed(2)}` : '-';

        activityData.push([
            timestamp,
            activity.description,
            activity.action,
            room,
            guestName,
            amount
        ]);
    });

    const activityWs = XLSX.utils.aoa_to_sheet(activityData);
    activityWs['!cols'] = [{ wch: 22 }, { wch: 35 }, { wch: 15 }, { wch: 8 }, { wch: 18 }, { wch: 14 }];
    XLSX.utils.book_append_sheet(wb, activityWs, "Activities");

    return wb;
}

function exportData(period) {
    ensureXLSX().then(() => {
        try {
            if (!window.XLSX) {
                showToast('Error: Excel library loading. Please try again in 2 seconds.', 'error');
                return;
            }

            const { startDate, endDate } = getDateRange(period);
            const { filteredGuests, filteredActivities } = filterDataByDateRange(startDate, endDate);

            if (filteredGuests.length === 0 && filteredActivities.length === 0) {
                showToast('No data available for this period.', 'warning');
            }

            const wb = createStyledWorkbook(period, startDate, endDate, filteredGuests, filteredActivities);
            const filename = `${hotelData.settings.hotelName}-${period}-export-${new Date().toISOString().split('T')[0]}.xlsx`;

            XLSX.writeFile(wb, filename);
            showToast(`${period.charAt(0).toUpperCase() + period.slice(1)} export downloaded successfully!`, 'success');
        } catch (error) {
            console.error('Export error:', error);
            showToast('Error exporting data: ' + error.message, 'error');
        }
    });
}

function exportAllData() {
    ensureXLSX().then(() => {
        try {
            if (!window.XLSX) {
                showToast('Error: Excel library loading. Please try again in 2 seconds.', 'error');
                return;
            }

            const allStartDate = new Date(0);
            const allEndDate = new Date();
            const wb = createStyledWorkbook('all-time', allStartDate, allEndDate, hotelData.guests, hotelData.activities);
            const filename = `${hotelData.settings.hotelName}-complete-export-${new Date().toISOString().split('T')[0]}.xlsx`;

            XLSX.writeFile(wb, filename);
            showToast('Complete data export downloaded successfully!', 'success');
        } catch (error) {
            console.error('Export error:', error);
            showToast('Error exporting data: ' + error.message, 'error');
        }
    });
}

// ==================== SERVICES ====================
function loadServicesPage() {
    populateFilterSelects('svcFilterFloor', 'svcFilterType');
    const statusEl = document.getElementById('svcFilterStatus');
    if (statusEl) statusEl.value = 'all';
    displayServiceRooms(hotelData.rooms);
}

function filterServiceRoomsAdvanced() {
    const status = document.getElementById('svcFilterStatus')?.value || 'all';
    const floor  = document.getElementById('svcFilterFloor')?.value  || 'all';
    const type   = document.getElementById('svcFilterType')?.value   || 'all';
    displayServiceRooms(applyRoomFilters(hotelData.rooms, { status, floor, type }));
}

function resetServiceFilters() {
    ['svcFilterStatus','svcFilterFloor','svcFilterType'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = 'all';
    });
    displayServiceRooms(hotelData.rooms);
}

function displayServiceRooms(rooms) {
    const grid = document.getElementById('servicesRoomsGrid');
    grid.innerHTML = '';

    rooms.forEach(room => {
        const isOccupied = room.status === 'occupied';
        const cfg = getStatusConfig(room.status);

        const card = document.createElement('div');
        card.className = `room-card bg-white rounded-lg p-6 ${isOccupied ? 'cursor-pointer' : 'opacity-60 cursor-not-allowed'}`;
        card.style.cssText = `border-left:4px solid ${cfg.color};`;
        card.onclick = isOccupied ? () => openRoomServiceModal(room.id) : () => showToast(t('toast_no_guest'), 'warning');
        card.innerHTML = `
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h3 class="text-2xl font-bold text-gray-800">${t('room_prefix')} ${room.number}</h3>
                    <p class="text-gray-600 text-sm">${room.type} — ${t('floor_prefix')} ${room.floor}</p>
                </div>
                <span class="badge" style="background:${cfg.color}20;color:${cfg.color};">
                    <i class="fas fa-circle text-xs mr-1"></i>${cfg.label}
                </span>
            </div>
            <div class="mb-3">
                <p class="text-2xl font-bold text-green-600">$${room.price}</p>
                <p class="text-xs text-gray-500">${t('per_night')}</p>
            </div>
            <div class="text-sm mb-4">
                <p class="text-gray-600">${t('capacity_label')}: <span class="font-semibold">${room.capacity} ${t('guests_label')}</span></p>
                ${isOccupied && room.currentGuest ? `<p class="text-gray-600">${t('guest_label')}: <span class="font-semibold">${room.currentGuest.name}</span></p>` : ''}
            </div>
            ${isOccupied
                ? `<button class="btn btn-primary w-full btn-sm" style="justify-content:center;">
                       <i class="fas fa-plus"></i> ${t('btn_add_service')}
                   </button>`
                : `<p class="text-xs text-gray-400 text-center">${t('not_occupied')}</p>`
            }
        `;
        grid.appendChild(card);
    });
}

function _populateOrderModal() {
    const select = document.getElementById('orderCategory');
    select.innerHTML = '';
    (hotelData.settings.serviceCategories || []).forEach(cat => {
        const opt = document.createElement('option');
        const display = catName(cat);
        const valueKey = typeof cat === 'object' ? (cat.en || cat.ar) : cat;
        opt.value = valueKey;
        opt.textContent = display;
        select.appendChild(opt);
    });
    document.getElementById('orderItemName').value = '';
    document.getElementById('orderQuantity').value = 1;
    document.getElementById('orderPrice').value = '';
}

function openRoomServiceModal(roomId) {
    const room = hotelData.rooms.find(r => r.id === roomId);
    if (!room || !room.currentGuest) return;

    selectedRoom = room;

    _populateOrderModal();
    openModal('orderModal');
}

// ==================== PURCHASES ====================
// Column-header sorting shared by Purchases and Outside Income — both tables have the identical
// shape (name/priceIQD/priceUSD/priceCardIQD/date/addedBy), so one comparator covers both.
let _tableSortState = {
    purchases:     { col: 'date', dir: 'desc' },
    outsideIncome: { col: 'date', dir: 'desc' }
};

function sortTableBy(table, col) {
    const state = _tableSortState[table];
    if (state.col === col) {
        state.dir = state.dir === 'asc' ? 'desc' : 'asc';
    } else {
        state.col = col;
        // Money/date columns read more naturally starting highest/most-recent first; text columns
        // read more naturally starting A→Z.
        state.dir = (col === 'name' || col === 'addedBy') ? 'asc' : 'desc';
    }
    if (table === 'purchases') loadPurchasesPage();
    else loadOutsideIncomePage();
}

function comparePurchaseLikeEntries(a, b, col, dir) {
    const mul = dir === 'asc' ? 1 : -1;
    let va, vb;
    switch (col) {
        case 'name':    va = (a.name||'').toLowerCase();    vb = (b.name||'').toLowerCase();    break;
        case 'iqd':     va = a.priceIQD != null ? a.priceIQD : (a.price||0); vb = b.priceIQD != null ? b.priceIQD : (b.price||0); break;
        case 'usd':     va = a.priceUSD || 0;      vb = b.priceUSD || 0;      break;
        case 'card':    va = a.priceCardIQD || 0;  vb = b.priceCardIQD || 0;  break;
        case 'addedBy': va = (a.addedBy||'').toLowerCase(); vb = (b.addedBy||'').toLowerCase(); break;
        default:        va = new Date(a.date).getTime();   vb = new Date(b.date).getTime();
    }
    if (va < vb) return -mul;
    if (va > vb) return mul;
    return 0;
}

// Lights up the arrow icon on whichever column header is the active sort, on whichever direction.
function updateSortIcons(theadSelector, state) {
    document.querySelectorAll(`${theadSelector} th.sortable-th`).forEach(th => {
        const icon = th.querySelector('.sort-icon');
        if (!icon) return;
        icon.className = th.dataset.sortCol === state.col
            ? `fas fa-sort-${state.dir === 'asc' ? 'up' : 'down'} sort-icon active`
            : 'fas fa-sort sort-icon';
    });
}

function loadPurchasesPage() {
    const tbody     = document.getElementById('purchasesTable');
    const thAdded   = document.getElementById('purchAddedByTh');
    const isAdmin   = loggedInUser?.role === 'admin';
    const allArr    = hotelData.purchases || [];
    const sortState = _tableSortState.purchases;
    // reception sees only their own entries; original index preserved for delete/edit even though
    // the table itself can be re-sorted by any column (i is the array index, not the display row number).
    const display   = (isAdmin
        ? allArr.map((p, i) => ({ p, i }))
        : allArr.map((p, i) => ({ p, i })).filter(({ p }) => p.addedBy === loggedInUser?.name)
    ).sort((a, b) => comparePurchaseLikeEntries(a.p, b.p, sortState.col, sortState.dir));
    const colCount  = isAdmin ? 9 : 8;
    if (thAdded) thAdded.style.display = isAdmin ? '' : 'none';
    updateSortIcons('#purchases thead', sortState);

    if (!display.length) {
        tbody.innerHTML = `<tr><td colspan="${colCount}" class="text-center text-gray-500 py-8">${t('no_purchases')}</td></tr>`;
        return;
    }

    tbody.innerHTML = display.map(({ p, i }, rowNum) => {
        const date     = new Date(p.date).toLocaleDateString();
        const iqd      = p.priceIQD != null ? p.priceIQD : (p.price || 0);
        const usd      = p.priceUSD || 0;
        const card     = p.priceCardIQD || 0;
        const iqdCell  = iqd  > 0 ? `IQD ${fmtIQD(iqd)}` : '—';
        const usdCell  = usd  > 0 ? `$${fmtUSD(usd)}`     : '—';
        const cardCell = card > 0 ? `IQD ${fmtIQD(card)}` : '—';
        const addedByCell = isAdmin ? `<td>${p.addedBy || '—'}</td>` : '';
        return `<tr>
            <td>${rowNum + 1}</td>
            <td>${p.name}</td>
            <td>${iqdCell}</td>
            <td>${usdCell}</td>
            <td>${cardCell}</td>
            <td>${p.notes || '—'}</td>
            <td>${date}</td>
            ${addedByCell}
            <td>
                ${isAdmin ? `<button class="btn btn-secondary btn-sm" onclick="openAdminEditModal('purchase',${i})" style="margin-right:4px;"><i class="fas fa-pen"></i></button>
                <button class="btn btn-danger btn-sm" onclick="deletePurchase(${i})"><i class="fas fa-trash"></i></button>` : ''}
            </td>
        </tr>`;
    }).join('');
}

function handlePurchaseSubmit(e) {
    e.preventDefault();
    if (!requireOnline()) return;
    const name = document.getElementById('purchaseName').value.trim();
    const priceIQD     = parseFloat((document.getElementById('purchasePriceIQD').value || '').replace(/,/g, '')) || 0;
    const priceUSD     = parseFloat(document.getElementById('purchasePriceUSD').value) || 0;
    const priceCardIQD = parseFloat((document.getElementById('purchasePriceCardIQD').value || '').replace(/,/g, '')) || 0;
    const notes = document.getElementById('purchaseNotes').value.trim();

    if (!name || (priceIQD <= 0 && priceUSD <= 0 && priceCardIQD <= 0)) {
        showToast('Enter a name and at least one price.', 'error');
        return;
    }

    hotelData.purchases.push({ name, priceIQD, priceUSD, priceCardIQD, notes, date: new Date().toISOString(), addedBy: loggedInUser?.name || '—' });
    saveDataToStorage();
    closeModal('purchaseModal');
    document.getElementById('purchaseForm').reset();
    showToast(t('toast_purchase_added'), 'success');
    loadPurchasesPage();
}

function deletePurchase(index) {
    if (!requireOnline()) return;
    hotelData.purchases.splice(index, 1);
    saveDataToStorage();
    showToast(t('toast_purchase_deleted'), 'success');
    loadPurchasesPage();
}

function loadOutsideIncomePage() {
    const tbody    = document.getElementById('outsideIncomeTable');
    const thAdded  = document.getElementById('oiAddedByTh');
    const isAdmin  = loggedInUser?.role === 'admin';
    const allArr   = hotelData.outsideIncome || [];
    const sortState = _tableSortState.outsideIncome;
    // reception sees only their own entries; original index preserved for delete/edit even though
    // the table itself can be re-sorted by any column (i is the array index, not the display row number).
    const display  = (isAdmin
        ? allArr.map((p, i) => ({ p, i }))
        : allArr.map((p, i) => ({ p, i })).filter(({ p }) => p.addedBy === loggedInUser?.name)
    ).sort((a, b) => comparePurchaseLikeEntries(a.p, b.p, sortState.col, sortState.dir));
    const colCount = isAdmin ? 9 : 8;
    if (thAdded) thAdded.style.display = isAdmin ? '' : 'none';
    updateSortIcons('#outsideIncome thead', sortState);

    if (!display.length) {
        tbody.innerHTML = `<tr><td colspan="${colCount}" class="text-center text-gray-500 py-8">${t('no_outside_income')}</td></tr>`;
        return;
    }

    tbody.innerHTML = display.map(({ p, i }, rowNum) => {
        const date     = new Date(p.date).toLocaleDateString();
        const iqdCell  = p.priceIQD     > 0 ? `IQD ${fmtIQD(p.priceIQD)}`     : '—';
        const usdCell  = p.priceUSD     > 0 ? `$${fmtUSD(p.priceUSD)}`         : '—';
        const cardCell = p.priceCardIQD > 0 ? `IQD ${fmtIQD(p.priceCardIQD)}` : '—';
        const addedByCell = isAdmin ? `<td>${p.addedBy || '—'}</td>` : '';
        return `<tr>
            <td>${rowNum + 1}</td>
            <td>${p.name}</td>
            <td>${iqdCell}</td>
            <td>${usdCell}</td>
            <td>${cardCell}</td>
            <td>${p.notes || '—'}</td>
            <td>${date}</td>
            ${addedByCell}
            <td>
                ${isAdmin ? `<button class="btn btn-secondary btn-sm" onclick="openAdminEditModal('outsideIncome',${i})" style="margin-right:4px;"><i class="fas fa-pen"></i></button>
                <button class="btn btn-danger btn-sm" onclick="deleteOutsideIncome(${i})"><i class="fas fa-trash"></i></button>` : ''}
            </td>
        </tr>`;
    }).join('');
}

function handleOutsideIncomeSubmit(e) {
    e.preventDefault();
    if (!requireOnline()) return;
    const name         = document.getElementById('outsideIncomeName').value.trim();
    const priceIQD     = parseFloat((document.getElementById('outsideIncomePriceIQD').value || '').replace(/,/g, '')) || 0;
    const priceUSD     = parseFloat(document.getElementById('outsideIncomePriceUSD').value) || 0;
    const priceCardIQD = parseFloat((document.getElementById('outsideIncomePriceCardIQD').value || '').replace(/,/g, '')) || 0;
    const notes        = document.getElementById('outsideIncomeNotes').value.trim();

    if (!name || (priceIQD <= 0 && priceUSD <= 0 && priceCardIQD <= 0)) {
        showToast('Enter a name and at least one price.', 'error');
        return;
    }

    if (!Array.isArray(hotelData.outsideIncome)) hotelData.outsideIncome = [];
    hotelData.outsideIncome.push({ name, priceIQD, priceUSD, priceCardIQD, notes, date: new Date().toISOString(), addedBy: loggedInUser?.name || '—' });
    saveDataToStorage();
    closeModal('outsideIncomeModal');
    document.getElementById('outsideIncomeForm').reset();
    showToast(t('toast_outside_income_added'), 'success');
    loadOutsideIncomePage();
}

function deleteOutsideIncome(index) {
    if (!requireOnline()) return;
    hotelData.outsideIncome.splice(index, 1);
    saveDataToStorage();
    showToast(t('toast_outside_income_deleted'), 'success');
    loadOutsideIncomePage();
}

// ==================== NOTIFICATIONS ====================
function updateNotificationBell() {
    if (!loggedInUser || loggedInUser.role !== 'admin') return;
    const wrap = document.getElementById('notifBellWrap');
    if (!wrap) return;
    wrap.style.display = '';

    const lastSeen = localStorage.getItem('notifLastSeenAt') || '1970-01-01T00:00:00.000Z';
    const unseen = (hotelData.reservationLog || []).filter(e =>
        e.status === 'cancelled' && e.cancelledAt && e.cancelledAt > lastSeen
    );
    const badge = document.getElementById('notifBadge');
    if (badge) {
        if (unseen.length > 0) {
            badge.style.display = 'flex';
            badge.textContent = unseen.length > 9 ? '9+' : String(unseen.length);
        } else {
            badge.style.display = 'none';
        }
    }
}

function toggleNotifPanel() {
    const panel = document.getElementById('notifPanel');
    const backdrop = document.getElementById('notifBackdrop');
    if (!panel) return;
    const isOpen = panel.style.display !== 'none';
    if (isOpen) {
        closeNotifPanel();
    } else {
        // Populate list
        const list = document.getElementById('notifList');
        const cancelled = [...(hotelData.reservationLog || [])]
            .filter(e => e.status === 'cancelled')
            .sort((a, b) => (b.cancelledAt || '').localeCompare(a.cancelledAt || ''));
        if (cancelled.length === 0) {
            list.innerHTML = `<div style="padding:20px;text-align:center;color:#9ca3af;font-size:0.88rem;">No cancelled reservations</div>`;
        } else {
            const lastSeen = localStorage.getItem('notifLastSeenAt') || '1970-01-01T00:00:00.000Z';
            list.innerHTML = cancelled.map(e => {
                const isNew = e.cancelledAt && e.cancelledAt > lastSeen;
                const bg = isNew ? '#fef9f0' : '#fff';
                const depParts = [];
                if ((e.depositIQD || 0) > 0) depParts.push(`IQD ${fmtIQD(e.depositIQD)}`);
                if ((e.depositUSD || 0) > 0) depParts.push(`$${e.depositUSD.toFixed(2)}`);
                const depStr = depParts.length ? depParts.join(' + ') : '—';
                const cancelDate = e.cancelledAt ? new Date(e.cancelledAt).toLocaleString() : '—';
                return `<div style="padding:12px 16px;border-bottom:1px solid #f3f4f6;background:${bg};">
                    ${isNew ? '<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#ef4444;margin-right:6px;vertical-align:middle;"></span>' : ''}
                    <span style="font-weight:600;color:#1f2937;font-size:0.88rem;">${t('room_prefix')} ${e.roomNumber} — ${e.guestName}</span>
                    <div style="color:#6b7280;font-size:0.78rem;margin-top:3px;">
                        Deposit: ${depStr}<br>
                        Cancelled: ${cancelDate}
                    </div>
                </div>`;
            }).join('');
        }
        // Mark all as seen
        localStorage.setItem('notifLastSeenAt', new Date().toISOString());
        updateNotificationBell();
        panel.style.display = '';
        if (backdrop) backdrop.style.display = '';
    }
}

function closeNotifPanel() {
    const panel = document.getElementById('notifPanel');
    const backdrop = document.getElementById('notifBackdrop');
    if (panel) panel.style.display = 'none';
    if (backdrop) backdrop.style.display = 'none';
}

// ==================== FIREBASE ====================

function toArr(val) {
    if (!val) return [];
    if (Array.isArray(val)) return val;
    return Object.values(val).filter(v => v != null);
}

function fbMerge(fbData) {
    const rawStatuses = (fbData.settings && fbData.settings.roomStatuses) || hotelData.settings.roomStatuses;
    return {
        ...hotelData,
        ...fbData,
        rooms:      migrateRoomStatuses(toArr(fbData.rooms).map(r => ({ ...r, priceHistory: toArr(r.priceHistory) })), rawStatuses),
        guests:     toArr(fbData.guests).map(g => ({ ...g, orders: toArr(g.orders) })),
        activities:     toArr(fbData.activities),
        purchases:      toArr(fbData.purchases),
        outsideIncome:       toArr(fbData.outsideIncome),
        incomeResets:        toArr(fbData.incomeResets),
        outsideIncomeResets: toArr(fbData.outsideIncomeResets),
        purchasesResets:     toArr(fbData.purchasesResets),
        shiftLog:       toArr(fbData.shiftLog),
        reservationLog: toArr(fbData.reservationLog),
        users:          toArr(fbData.users),
        deletedRoomIds:  toArr(fbData.deletedRoomIds),
        deletedGuestIds: toArr(fbData.deletedGuestIds),
        settings:   { ...hotelData.settings, ...(fbData.settings || {}),
            roomStatuses: ensureDefaultRoomStatuses(rawStatuses) }
    };
}

function setupFirebaseRealtimeListener() {
    window.fbDb.ref('hotelData').on('value', snap => {
        const data = snap.val();
        if (!data) return;
        hotelData = fbMerge(data);
        localStorage.setItem('hotelData', JSON.stringify(hotelData));
        updateNotificationBell();
        // Refresh whichever page is currently visible
        const visible = document.querySelector('.page-content[style*="display: block"], .page-content[style*="display:block"]');
        if (visible) refreshPage(visible.id);
        // If a Shift Report is open, silently redraw it with the same shift/staff selected — this
        // is what makes an admin's correction (e.g. fixing a wrong deposit) actually show up in the
        // itemized rows immediately, instead of only being visible next time the report is reopened.
        if (_openShiftReportArgs && document.getElementById('shiftReportOverlay')) {
            downloadShiftReport(false, _openShiftReportArgs.shiftId, _openShiftReportArgs.monthKey, _openShiftReportArgs.staffOverride);
        }
    });
}

function refreshPage(pageId) {
    switch (pageId) {
        case 'dashboard':     loadDashboard();     break;
        case 'checkIn':       loadCheckInPage();   break;
        case 'checkOut':      loadCheckOutPage();  break;
        case 'rooms':         displayRoomsGrid(hotelData.rooms); break;
        case 'history':       loadHistoryPage();   break;
        case 'reports':       loadReportsPage();   break;
        case 'purchases':     loadPurchasesPage(); break;
        case 'outsideIncome': loadOutsideIncomePage(); break;
        case 'cleanerStatus': loadCleanerPage();   break;
    }
}

function setupOnlineWatcher() {
    window.fbDb.ref('.info/connected').on('value', snap => {
        isOnline = snap.val() === true;
        const dot = document.getElementById('syncStatus');
        if (dot) {
            dot.style.background = isOnline ? '#10b981' : '#ef4444';
            dot.title = isOnline ? 'Online' : 'No internet connection';
        }
    });
}

function requireOnline() {
    if (isOnline) return true;
    showToast('No internet connection. Please reconnect and try again.', 'error');
    return false;
}

function checkFirstRun() {
    if (!window.fbDb) { showLogin(); return; }
    window.fbDb.ref('users').limitToFirst(1).once('value').then(snap => {
        if (!snap.exists()) {
            showFirstRunSetup();
        } else {
            showLogin();
        }
    }).catch(() => showLogin());
}

function showFirstRunSetup() {
    const overlay = document.getElementById('firstRunOverlay');
    if (overlay) overlay.style.display = 'flex';
    const loginOv = document.getElementById('loginOverlay');
    if (loginOv) loginOv.style.display = 'none';
}

function handleFirstRun(e) {
    e.preventDefault();
    const name     = document.getElementById('setupName').value.trim();
    const email    = document.getElementById('setupEmail').value.trim();
    const password = document.getElementById('setupPassword').value;
    const errEl    = document.getElementById('setupError');
    const btn      = e.target.querySelector('button[type="submit"]');
    errEl.style.display = 'none';
    if (btn) btn.disabled = true;

    window.fbAuth.createUserWithEmailAndPassword(email, password)
        .then(cred => {
            const uid     = cred.user.uid;
            const profile = { name, email, role: 'admin' };
            loggedInUser  = { uid, ...profile };
            if (!hotelData.users) hotelData.users = [];
            hotelData.users.push({ uid, ...profile });
            sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
            return window.fbDb.ref('users/' + uid).set(profile)
                .then(() => window.fbDb.ref('hotelData').set(hotelData));
        })
        .then(() => {
            startShiftSession();
            if (btn) btn.disabled = false;
            document.getElementById('firstRunOverlay').style.display = 'none';
            showApp();
            setupFirebaseRealtimeListener();
        })
        .catch(err => {
            if (btn) btn.disabled = false;
            errEl.textContent = err.message;
            errEl.style.display = 'block';
        });
}
