---
title: HC Starlight
description: سِمة Starlight مخصّصة بعلامة Hack Club — مولّد مواقع توثيق مُصغر مع توثيق ونسخة تجريبية للإظهار.
technologies:
  - name: Astro
    icon: logos:astro-icon
    category: frontend
    slug: astro
  - name: Starlight
    category: framework
    slug: starlight
  - name: Hack Club CSS
    icon: simple-icons:hackclub
    category: design
    slug: hackclub-css
link: https://hc-starlight.pages.dev
repo: https://github.com/saif-abdelrazek/hc-starlight
package: https://www.npmjs.com/package/hc-starlight
slug: hc-starlight
order: 7
shownInHome: true
---

## حول هذا المشروع

قمت ببناء قالب Starlight يطبّق هوية Hack Club ويحوّل Starlight إلى سِمة توثيق جميلة وسهلة الاستخدام. هذا المشروع كان أول حزمة npm أنشأتها ونشرتها كمحاولة عملية لفهم كيفية تجاوز مكوّنات Starlight وهيكله الخاص بالأنماط.

## ما أردت تحقيقه

- تعلم طريقة تجاوز مكوّنات Starlight وأنماطها
- تطبيق ألوان وهوية Hack Club عبر السِمة
- توفير موقع توثيق/عرض حي ليجرب الآخرون السِمة

## العمل الأساسي

- عدّلت ألوان Starlight لاستخدام متغيرات Hack Club من https://css.hackclub.com
- استبدلت مفتاح تبديل الثيم الافتراضي بـ `astro-theme-toggle` للحصول على سلوك أدق
- صممت شعار "Houston" المخصّص بالأسلوب الكرتوني ودمجت شعار Hack Club
- أضفت توجيه جانب العميل اختياريًا (`astro-vtbot`) لإعطاء سلوك SPA عند الحاجة

## أيقونات وتحديات

لاحظت تفاوت أحجام أيقونات في `@hackclub/icons`، فقمت بـ:
- اختيار 36 أيقونة، وتطبيع مسارات SVG والهامش، وإضافتها كمجموعة موحّدة
- إنشاء مكوّن `Icon` لتسهيل الاستخدام وضمان تباين الأحجام

## ما تعلمته

- فهم عميق لكيفية عمل سِمات Starlight وتجاوز المكوّنات
- كيفية تطبيق نظام ألوان خارجي داخل بنية Starlight
- نشر حزمة npm وإدارة إصدار أولي
- العمل المتقدم على مسارات SVG لتطبيع الأيقونات

يعرض المشروع نهجاً عملياً لتكييف Starlight ليتوافق مع هوية مرئية محددة، ويبيّن قدرتي على العمل مع أنظمة تصميم ونشر حزم صغيرة مفيدة للمجتمع.
