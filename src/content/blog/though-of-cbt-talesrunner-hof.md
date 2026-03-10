---
author: Cartoon Kritthapath Yaviraj (Toonshouin),
pubDatetime: 2025-04-08T06:30:00.000+07:00
modDatetime: 2025-04-08T06:30:00.000+07:00
title: "[TH] ความรู้สึก หลังเปิด CBT : Tales Runner - Dream Journey"
description: ความบรรเทิงของเกม Close Beta Test ที่มันไม่ควรจะเกิด แต่เกิดมาและ เราคงจะได้อะไรมาบ้าง
slug: though-of-cbt-talesrunner-hof
featured: true
draft: false
tags:
  - thai
  - storytime
  - talesrunner
ogImage: ../../assets/images/banner/though-of-cbt-talesrunner-hof.svg
---
มาและลูกจ๋า เกมที่เป็นกระแสในด้านลบมากที่สุด **==(ไม่มุกด้วยนะ)==** ก็คงหนีไม่พ้นกับเกม Tales Runner - Dream Journey (ซึ่งไม่ได้เกี่ยวอะไรกับ Dream Journey ใน Umamusume เลย)

![](@/assets/images/though-of-cbt-talesrunner-hof/www.facebook.com_photo_fbid=1196404639334270andset=a.401637345477674Asus-Zenbook-Fold.png)

และ Blog นี้พิเศษ เพราะปกติแล้ว ผมไม่เคย Collaborate Blog เลย และนี่ก็เป็นครั้งแรกกับการ Collab กันนะ ก็ก่อนเข้าเรื่อง ใครอยากมาช่วยปรับปรุงเนื้อหาบล็อกต่าง ๆ สามารถลองมาคุย หรือเปิด Pull Request มาได้เลย!!

## Table of contents

# Before start!

ก่อนอื่นเลย ต้องขอบคุณทุกคนที่มาช่วยคิดเห็น / ทดสอบสูตร Wine Bottles ในกลุ่ม[ชมรมคนรัก Linux](https://www.facebook.com/groups/linux.lover.th/) กันด้วย!! ทุกคนช่วยกันหาจุดต่าง ๆ ที่ผมเองก็อาจะไม่รู้หรือปรับปรุงได้ เช่น Dependency ที่ถูกต้อง หรือ Flatpak Support อะไรแบบงี้ หรือบางคนมาแนะนำแอปต่าง ๆ ที่ตัวเองใช้เล่น ซึ่งก็ช่วยกันได้มากเลย ต้องขอบคุณมาก ๆ ครับ
![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260303012047.png)

และ TL;DR ใครอยากอ่านเนื้อหา โดดไปอ่าน [Chapter 2](#chapter-2-tales-drive-runner) ได้เลย

# Chapter 1 - จุดเริ่มต้น

ช่วงปลายปีที่แล้ว เราหลาย ๆ คนก็น่าจะทราบข่าวที่ Tales Runner จะกลับมาเปิดอีกครั้ง
![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260303014339.png)

แน่นอนว่าผมเองก็ทันเล่นเช่นกัน (แต่เป็นช่วง playpark แล้วอ่ะนะ) ทีนี้ก็เลยส่งไปให้น้องดู
![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260303014504.png)

แล้วก็ต่างคนและลงโพสต์ไม่ได้มีอะไรกัน และที่นี้

## Before CBT Start

แน่นอนช่วงที่ผ่านมา ผมก็ได้ไปรู้จักใครหลาย ๆ คนอีกมากมาย และหนึ่งในนั้นมาจากผมเลื่อนไปดูโพสนึงของพี่แท็ค และไปเจอคอมเม้นนี้

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260303014933.png)

และแน่นอน คนที่มัน Nerd Tech Certified(tm) แบบเรา หนีไม่พ้นก็ไปส่องโพสต์เขาเล่น ๆ ในเฟส ในไอจี และก็...

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260303015142.png)

ก็เริ่มได้คุยกัน และก็ป้ายยากันไปเรื่อย (ล่าสุดตอนนี้ก็ลากผมไปเล่น Windows 8 กับ Windows Server 2008 R2 ซ่ะเหมือนตอนเด็กเลย 😂)

### แล้วที่เล่ามา มันเกี่ยวอะไรหล่ะ??

อ่อ แน่นอนว่าเมื่อ Patcher มาเจอกับคน Nerd ที่ดันเป็น Web Developer ที่พอรู้เรื่องนุ๊น/นี้นิดหน่อย แน่นอนเราก็จะลองใช้ Windows เก่า เป็น Daily Basic รวมถึงลองเอาเกมใหม่ ๆ มาเล่นดูเรื่อย ๆ และผมอาจะช่วยเขาเทส Patch Windows บางส่วนให้ (เพราะฉนั้น ใครอยากลองกลับไปเล่น Windows เก่า ๆ ลองไปคุยได้เลย และคุณจะได้อะไรไปเยอะมาก ๆๆๆ) แล้วตอนนั้น สเปคเกม Tales Runner ออกมาพอดีครับ แต่ทุกคนน่าจะเห็นอะไรแปลก ๆ

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260303015806.png)

คนอื่นอาจะไม่ได้รู้สึกอะไร แต่ดูขั้นต่ำดี ๆ
- Core 2 Duo
- Geforce 400
- 4 GB
- Windows 10

สำหรับคนที่มีความรู้ตรงนี้ จะเกิดคำถามประมาณว่า ***=="แม่งเข้ากันตรงไหนว่ะ??"==*** คืออันดับแรก Core 2 Duo, 2 Core 2 Thread ที่ไม่มี HT, เป็น CPU 775 ออกมาแถวช่วง 2006 - 2007 (ซึ่งผมเพิ่งเกิด) กับแรม 4 GB ซึ่งก็เหมาะสมกับคอม ยุค 2006 - 2010 ต้น ๆ ดี กับการ์ดจอช่วง 2010 แต่ต้องมาเจอ Windows 10 ที่โดดออกมาจากเพื่อน ฟังดูเหมือน `"5 ปี ไม่เยอะหนิ"` แต่คุณ เกมสมัย 2010 กับ 2015 - 2017 มันต่างกันราวฟ้ากับเหวเลยนะ!! และ Windows 10... คือถึงแม้จะมี Driver แต่ผมไม่อยากนึกสภาพในการเอามาใช้ในทุกวันนี้ ที่แค่เปิด Google Chrome โดนไปแล้ว...

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260303021100.png)

เจอ Windows Update และอื่น ๆ สารพัดเข้าไป (ไม่นับ Driver บางบอร์ด 775 ไม่มีสำหรับ Windows 10 ด้วย) ก็คงไม่ต้องถามนะ ว่า Windows 7 เถอะ

ที่นี้ ผมก็เลยเกิดข้อสงสัยว่า "มันลงไปต่ำสุดได้ขนาดไหน" ผมก็เลยแบ่งส่วนไปเลย โดยผมจะจัดการ Windows ที่ผมรักอย่าง Windows 7 และ Linux เอง ส่วนคุณ Milk (ใช่ ติดเรียกแบบนี้ไปและ) ก็จะไป Windows 8.1, Windows ที่ก็ไม่ค่อยมีคนรักมันเท่าไร ผมก็เตรียมสมัครสมาชิกอะไรให้เรียบร้อย รอวันที่ 24 ที่เขาประกาศเปิดรอบ CBT ไปเลย แต่ไม่ทันใด

# Chapter 2 Tales (Drive) Runner

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260305023536.png)

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260305023548.png)

<blockquote class="twitter-tweet"><p lang="th" dir="ltr">อาจจะได้หายไปพักใหญ่ๆ เลยนะครับ <br>เพราะพึ่งโดนเกมๆนึง บอมไฟล์ในเครื่องหายไปหมด 😭😭<br>ขออนุญาตไปนั่งร้องไห้ก่อน <a href="https://t.co/fqPlEpZulN">pic.twitter.com/fqPlEpZulN</a></p>&mdash; Orange_みかん 🍊 🐱 (@OI2ANGE_) <a href="https://twitter.com/OI2ANGE_/status/2026286249661911235?ref_src=twsrc%5Etfw">February 24, 2026</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


