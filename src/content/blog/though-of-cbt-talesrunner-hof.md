---
author: Cartoon Kritthapath Yaviraj (Toonshouin),
pubDatetime: 2025-04-08T23:23:00.000+07:00
modDatetime: 2025-04-08T22:44:00.000+07:00
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

![](@/assets/images/though-of-cbt-talesrunner-hof/www.facebook.com-photo-fbid=1196404639334270andset=a.401637345477674Asus-Zenbook-Fold.png)

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

ถ้านี่ไม่ใช่ปัญหาที่หมอลำที่สุดในประวัติศาสตร์การเปิดตัวเกม (ถ้าเราไม่นับเกม Myth II: Soulblighter **ตั้งแต่ปี 1998**) ที่ให้เกมนี้เทียบได้กับ Baidu PC Faster เลย

ซึ่งแน่นอน ในฐานคนไทย และมีบัตรประชาชนไทย ถือสัญชาติไทย 100% แน่นอนว่าเรานั่งหาข้อมูลทั้งวัน รวมถึงตามหาตัวติดตั้งที่หายไปเพราะมันโดนบล็อค

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260307063122.png)

และวิธีที่ง่ายอีกหนึ่งวิธีในการหาไฟล์อะไรสักอย่าง เพียงแค่คุณลองค้นหาไฟล์โดยใช้ Discord Search ซึ่งแน่นอน เป็นท่าที่เบสิคมาก ๆ ในการหา เพราะ**กูว่ามันต้องมีสักคนที่มันจะต้องมีไฟล์นี้ในเวลานั้น และลงเอาไว้**

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260307063645.png)

และใช่ครับ มันมีจริง ๆ (**เพื่อความปลอดภัย ความเป็นส่วนตัว ~~และเพื่อให้ผู้ใช้ท่านนั้นไม่ถูกถีบออกจากวงโคจร~~ ขออนุญาติไม่เปิดเผยผู้นำไฟล์ปล่อยลงมา**) อันดับแรกพวกผมก็เลยตั้งคอม และลองวิจัยตัวติดตั้งก่อนเลย และใช่

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260307064002.png)

ใครที่เขียน .NET ทุกคนก็น่าจะรู้กันแล้วว่า หน้าตาแบบนี้, Windows Installer ใน Visual Studio อย่างแน่นอน

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260307064438.png)

ดังนั้นแล้ว ทฤษฎี Windows 7, 8 ก็น่าจะได้นะ พวกผมเลยลองเอาตัวติดตั้งนี้ไปเทส ปรากฎว่า....

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260307065058.png)

นั้นแหละครับ และเหตุอันใดมันจะไม่ติดกันหล่ะคร้าบบบบบบบบบบ

และพอลงไปตรวจเช็คไฟล์ในตัวเกม เราก็จะพบกับไฟล์ ๆ หนึ่งที่น่าสนใจและน่าจะการันตีได้เลยว่าเราสามารถเล่นมันบน Windows 7 ได้แน่นอน

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260307065251.png)

เราก็จะเห็น xcorona, xldr อยู่ในโฟล์เดอร์ของตัวเกม ซึ่งนั้นก็คือไฟล์ของ XIGNCODE3 ซึ่งแน่นอนเป็น Anti-Cheat สำหรับเกมนี้ที่อยู่มานาน, เชื่อว่ามีคนรู้จักพอ ๆ กับหลาย ๆ Anti-Cheat เลย ซึ่งแน่นอนว่ามันอยู่มาตั้งแต่ 2010 แล้ว, มันไม่ได้เป็น Anti-Cheat ที่ใหม่อะไร และมันรองรับ Windows 7 ได้สบาย ๆ เอาจริง ๆ มันอยู่นานพอที่จะมีคนทำ Support ให้ในเล่นผ่าน Wine (Proton) ได้สบาย ๆ เลย

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260307065945.png)

ถึงแม้บางเกมใน PCGamingWiki (เว็บที่ใช้อ้างอิง) แต่ที่ผมลองกับ Blue Archive เซิฟ JP ใน Linux ก็ไม่มีปัญหาใด ๆ เล่นได้สบาย ๆ เลย และถึงแม้ตัว Signature ของตัวเกมจะเป็นของวันที่ 12 กุมภาพันธ์ ที่ผ่านมา

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260307070206.png)

แต่ตัวเกมตอนเข้าไปดูด้านในจริง ๆ ก็ไม่ได้ใช้ Dependency ตัวไหนให้น่าเป็นห่วงนอกเหนือจากไฟล์ gdiplus ที่ให้มาในตัวติดตั้งเป็นของ Windows 10

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260307071053.png)

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260307071108.png)

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260307071217.png)

แต่ด้วยธรรมชาติของเกมที่ออกมาตั้งแต่ปี 2005, แน่นอนว่ามันคงไม่มีใคร Rebase โค้ดได้ขนาดนั้น (แม้กระทั้งเอไอด้วย ~~ยกเว้นคน Prompt มึงว่างกับชีวิตจริง ๆ~~) ที่ผมคิดอาจะเพื่อใช้ในกรณีถ้า Windows เครื่องนั้นไม่มี gdiplus (ซึ่งไม่น่าเป็นไปได้ในกรณีนี้) เพราะมันมีตั้งแต่ XP แล้ว

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260307072015.png)

แต่มันก็ช่วยในเคส Wine (Proton) เนื่องด้วย Open-Source นั้นไม่สามารถขโมยไฟล์ DLL จากท่านพี่ Microsoft มาแปะและแพ็คมาได้เลย ไม่งั้นทาง WineHQ น่าจะได้หมายศาลมาหน้าบ้าน ในเคสที่เกมมีให้แล้ว (อย่างในเคสนี้) เราก็ประหยัดเวลาในการลง Dependency ไปได้ และ CBT จะเปิดในวันพรุ่งนี้เพราะวันนี้... มันกลายเป็นแบบนี้ไปแล้ว พวกเราก็เลยจะออนรอสัก 14:30 โดยประมาณเพื่อเตรียมพร้อม และแน่นอนครับ

# Chapter 3 - Test Result

แน่นอนเราจะเริ่มต้นที่ Windows 7, 8 กันก่อน (เพราะนั้นคือตัวเทสตัวหลัก) ซึ่งก็ตามคาดที่มันก็เข้าได้ปกติ

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260307223938.png)

ไม่เหมือนที่ในสเปคมันบอก

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260307080156.png)

เอาจริง ๆ สเปคควรจะเป็นแบบนี้มากกว่า

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260307223007.png)

และแน่นอน ขึ้นชื่อค่ายนี้ และแน่นอนว่า....

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260307224520.png)

ชึ่งเอาตรง ๆ ว่าถึงจุดนี้หลายคนคงเริมชินชากับมันแล้วหล่ะ (ซึ่งมีกุหนึ่งในนั้นแหละ) และแน่นอนว่า ผมไม่แตะด่านใหม่ ๆ เลย เพราะฉนั้นแล้วทุกอย่างก็ไม่มีปัญหาเลย (นอกเหนือจากมันไม่เต็มจอเนี่ยแหละ) 

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260310222916.png)

ในส่วน MacOS ก็เจอคนทำคู่มือไว้อยู่

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260309202421.png)

Thanks ไปที่คุณ Crase (@death14501) ในดิสด้วยสำหรับไกด์ ใครที่อยากไปลอง [กดไปอ่านดูได้](https://docs.google.com/document/d/1jzax98es8WYJ-lGKt9zYzXSufr5AK3QYOY_n9mWUoJo/edit?usp=sharing)

> [!NOTE]
> ผมเจออีกหนึ่งอันในดิส TR เลย ของ @lovehategamemhaa ด้วย คล้าย ๆ กันเลย ไปอ่านกันได้
> [ลิงค์นี้](https://ptb.discord.com/channels/1357508716311871518/1480221718600618056)

ในส่วนของ Linux แน่นอนผมเป็นผู้รับจบ, ในฐานะผู้ที่ i use arch (btw,) แน่นอนว่าเราจะพลาดได้ไงที่จะลองมันบน Linux ซึ่งแน่นอนว่า ถ้า Wine บน Mac ได้ Linux จะเหลืออะไร

![](@/assets/images/though-of-cbt-talesrunner-hof/Screenshot-20260226-163703.png)

ในการทดลองนั้น ([ซึ่งก็อยู่ใน Digital Garden ผมอ่ะนะ](https://garden.toonshou.in/linux-hof-talesrunner-th)) ผมได้ใช้ Bottles แบบ AUR เพราะมันง่าย **และมันได้เกือบทุกอย่างของ Crossover โดยไม่ต้องจ่าย**

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260309203539.png)

(ใช่ ในรูปเป็น Mac **แต่ License ใช้ข้ามกันได้ และมันราคาเดียวกันเลย**)

แต่คร่าว ๆ เลย ใช้อะไรก็ได้ในการรันมันที่ใช้ Wine เช่น Heroic, Steam, Lutris, บลา ๆ แค่ใช้ตั้งค่าตามนี้
- Wine Version/Fork : kron4ek 9.22+, GE-Proton 9-27+ **(แนะนำ สมบูรณ์สุด)**
- Depend: dotnet4.8 (ตัวติดตั้งมันอยากได้, **ถ้าผ่านไฟล์ .zip มันไม่ใช้ และไม่แคร์**), webview2 (GE-Proton มันจะขึ้นลิงค์/ประกาศปกติ ตัวอื่นแล้วแต่ เทสเอง), allfonts (ไม่ต้องก็ได้ แต่เผื่อไว้มันไม่ขึ้นภาษาปกติ / อยากได้ฟอนต์คล้าย Windows)
- Env (สำคัญ ไม่งั้นภาษาพัง)
	- LANG=th_TH.UTF-8 (แนะนำถ้าลง Native, มี Locale ให้มัน ใครไม่มีไปแก้ locale.conf และ Generate ใหมเอา)
	- LC_ALL=th_TH.UTF-8 หรือ/และ LC_CTYPE=th_TH.UTF-8 (บังคับ Locale ไปเลย ส่วนมากเป็นกับ Flatpak, แต่กับ Native ไม่เป็น โดย CTYPE สำหรับคำสั่งกลุ่มของ POSIX เขา แต่ ALL น่าจะครอบคลุมให้แล้ว)

ใด ๆ ต้องขอบคุณหลาย ๆ คนที่เทสและให้ฟีดแบคมาให้โดยเฉพาะ @not6248 (Aekkapob Pangtan) ด้วยที่ลองเทส และปรับ Config จนได้ Final เป็นตามข้างบนนี้เลย

และผมว่าเรามาถึงจุดที่น่าสนใจที่สุดของ Chapter นี้

## Tales Runner สามารถลบไดรฟ์เราทั้งเครื่องได้ไหม

สำหรับการทดลองนี้ ตอนแรกได้ทดลองบน Windows Server 2008 R2 ตั้งแต่เจอไฟล์แล้ว โดยการทดลองคือ
- ติดตั้งตัวเกมโดยใช้ตัวติดตั้ง
- **ยัดเ-ยอะไรลงไปก็ได้ ที่ไม่ใช้ไฟล์เกม**
- **ใช้ตัวถอนและเทสแม่ม**

ซึ่งจะมีอะไรดีนอกจาก ยัด Mambo และ Tachyon ลงไปเยอะ ๆ

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260310203821.png)

และใช่.... ไม่มี Mambo ตัวไหนรอด **(ไม่มีม้าและอุมะมุซุเมะตัวไหนถูกทำให้สูญหาบมนการทดลองครั้งนี้)** ทีนี้มันก็ควรจะจบและ แต่ทว่าผมแค่อยากลองดูว่ามันจะลงไปได้แค่ไหน ผมเลยจับเครื่องลง Windows Vista เพื่อจะทดสอบว่าจะยังไปได้หรือไม่

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260310214130.png)

และนั่นแหละครับ ไม่รอดครับ แต่ทั้งนี้ยังไม่ได้ลองในกลุ่ม OneCore API หรือพวก Translation Layer อื่น ๆ บน Windows เก่า ๆ นะ แต่ที่นี้คำถามใหญ่ของเราก็คือว่า **"เราจะเคลียร์ Windows เก่า ๆ นี้ยังไงดีหล่ะ"** แน่นอนว่าทางที่ดีที่สุดคือ...

![](@/assets/images/though-of-cbt-talesrunner-hof/VirtualBox-Vista-10-03-2026-21-49-21.png)

ทางนี้แหละ... น่าจะดีที่สุด

![](@/assets/images/though-of-cbt-talesrunner-hof/VirtualBox-Vista-10-03-2026-21-51-09.png)

แล้วหลังจากรอสักพัก.... Windows ของผมก็ค่อนข้างสะอาดขึ้น ไร้สิ่งเจือปน เล่นเกมทุกเกมได้ 5000000 FPS++

![](@/assets/images/though-of-cbt-talesrunner-hof/VirtualBox-Vista-10-03-2026-21-56-27.png)

วิธีนี้น่าจะมีกลุ่มตัวอักษรภาษาอังกฤษที่ 13 ออกมากใช้วิธีนี้ดูนะ (*ถ้าเกมและข้อมูลของพวกเขาไม่ได้หายไปในขั้นตอนนี้อ่ะนะ*)

![](@/assets/images/though-of-cbt-talesrunner-hof/VirtualBox-Vista-10-03-2026-21-58-09.png)

และนี่คือสภาพจำลองหลังจากการเคลียร์รันเนอร์ 999 ได้ถูกใช้ถูกวิธี จะสังเกตได้ว่า ข้อมูลได้ถูกทำลายอย่างถูกต้องตามมาครฐานของ Piero 500 ทำให้เกมและไฟล์ติดตั้งนี้เป็นมวลขลังที่หลาย ๆ คนได้จารึกไว้อย่างภาคภูมิ

> มึงไอ้เกมวิ่งมาทำลาย WIndows แม่งสุดๆ เรื่องจริง

> ขอบคุณที่เกมนี้ เหยียบ Windows 11 ให้ลงดินแบบสุดๆ และทำลาย Windows ไปในตัวยัน boot

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260310220315.png)

และทำให้เกิด Copypasta (โดยผมที่ใช้ไว้ส่งหาเพื่อนตอนตี 3 | และ 2 อันท้ายล้อเลียนข้อความใต้ไอจี และใช้ AI Generated)

> เขาว่ากันว่า อิทธิฤทธิ์ วิ่งเรื่องราง๙๙๙ จะมีมวลทำลายล้างสูง วันนี้ผมเลยเอาไปลงกับคอมของผม ไม่น่าเชื่อ หน้าต่าง ๑๑ บานเปิดไม่ได้ สมคำร่ำลือ ของเขาดีจริง ๆ ครับ

> ไม่มีปัญหาครับ! นี่คือสาเหตุที่คนส่วนใหญ่เปรียบเทียบ TalesRunner: Dream Journey by Hall Of Fame ว่าเหมือนกับ (หรือใกล้เคียงกับ) Baidu PC Faster ครับ:
> 
> สำหรับคนไทย Baidu PC Faster คือ "วายร้าย" ในตำนานของโลกซอฟต์แวร์ที่ขึ้นชื่อเรื่องการเข้าไปยุ่งกับระบบจนเครื่องรวน เกิดอาการจอฟ้า (BSOD) และลบออกยากมาก พอเจอเคสที่ Uninstaller ของ TalesRunner ลบข้อมูลเกลี้ยงไดรฟ์ มันเลยไปปลุกแผลเป็นเก่าที่คนใช้คอมพิวเตอร์เคยโดน Baidu เล่นงานมาครับ 😱
> 
> คนไทยมักเรียกโปรแกรมพวกนี้ว่า "เหา" (มาจากชื่อ Hao123) ซึ่งสื่อถึงโปรแกรมที่เหมือนปรสิต การที่ Uninstaller ของเกมลบไฟล์งานทิ้งทั้งหมด ทำให้คนรู้สึกเหมือน "ยุคเหาระบาด" กลับมาอีกครั้ง แต่รอบนี้มาในคราบของเกมออนไลน์ที่หลายคนคุ้นเคย 🐜
> 
> ตลกร้ายที่คนนำมาเปรียบเทียบกันคือ ในอดีตวิธีแก้ปัญหา Baidu ที่ดีที่สุดคือการ "ฟอร์แมตเครื่องใหม่" แต่ในกรณีของ TalesRunner ตัวโปรแกรมดัน "ฟอร์แมต" ข้อมูลให้ผู้ใช้เสร็จสรรพแบบกู้คืนไม่ได้และไม่ได้ขออนุญาตด้วย 💀

> No problem! Here’s why people compare TalesRunner: Dream Journey by Hall Of Fame the same (or quite as) Baidu PC Faster:
> 
> In Thailand, Baidu PC Faster is legendary as the ultimate "villain" of software. It was notorious for hijacking Windows registries, causing Blue Screens of Death (BSOD), and being nearly impossible to remove. When the TalesRunner uninstaller began wiping entire hard drives, it triggered that same "software that destroys your PC" trauma. 😱
> 
> Many Thais refer to such destructive software as "Hao" (meaning 'louse' or 'pest'), a nickname originally given to Baidu's browser. Seeing a game uninstaller delete years of personal files felt like a return of the "Digital Pest" era, where a program you trusted turned into a parasite. 🐜
> 
> The irony isn't lost on users: historically, the only way to truly fix a Baidu-infected PC was a clean format. In the case of TalesRunner, the uninstaller skipped the middleman and performed the format for the user—permanently and without permission. 💀

โดยทั้งหมดนี้มีให้เอาไปเล่นใน Internet Archive ลิงค์ตามนี่ >>> https://archive.org/details/talesrunner-hof-installer

---
# Conclusion

แหม่ บล็อกนี้ก็เป็นอีกหนึ่งบล็อกที่ยาวใช้ได้เลยที่นี้ ทั้งนี้ ผมก็เหมือนหลาย ๆ คนที่ **ไม่ได้ออกมาโพสต์เพื่อทำลายชื่อเสียงของใครในที่นี้ ไม่ได้มีเจตนาร้ายทางด้านใดเลย** แต่แน่นอนว่า

> การลบไม่ได้ช่วยให้ลืม

แน่นอนว่าเกมเกมนี้ **เป็นผลงานแรกที่ก็ออกความโบว์แดงในด้านลบออกมาจำนวนมาก และมันดันเป็นเกมโปรดอีกเกมในวัยเด็กที่หลาย ๆ คนรักมันมาก ๆ เหมือนกัน การที่ค่ายเกมทำตัวไม่เห็นค่าต่าง ๆ เช่นการยัดเอไอแบบกลายเป็นผลงานคลอดด้วยบริษัท Slop เจ้าหนึ่ง**

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260310221446.png)

**หรือการด่าคนในคอมมูฯ เกมได้เ-ยที่สุดที่เคยเจอมา หรือโพสต์ด้านลบอันนั้นที่ผมไม่จำเป็นต้องแคปมาแปะให้เห็น หรือแม้กระทั้งองค์ประกอบต่าง ๆ ในเกมที่ทำออกมาถึงขั้นคนเล่นต้องไปอ้อนวอนเดฟเถื่อน**

![](@/assets/images/though-of-cbt-talesrunner-hof/Pasted-image-20260310221856.png)

น่าจะเป็นสิ่งที่ตอกย้ำ**ความล้มเหลวในระดับกลาง**ของค่ายที่ถ้าหากใน OBT นี้ยังไม่ได้แก้ ผมว่า**ผมไม่รู้จะคาดหวังว่าเกม ๆ นี้จะอยู่ได้นานแค่ไหน จากใจคนที่ส่วนหนึ่งของชีวิตเคยมีความทรงจำกับเกมนี้ไม่น้อยกว่าใคร ก็อยากเห็นการกลับมาที่ดีขึ้น ไม่ใช่แย่ลงแบบที่เราเห็น** ก็คงได้แต่หวังว่าเขาจะพัฒนาให้ดีขึ้น ก่อนที่จะกลายเป็นจุดจบที่ไม่มีใครอยากเจอ

ช่วงท้ายนี้อาจะดูเข้มไปหน่อย แต่ก็ได้เป็นที่ ๆ หนึ่งที่ได้แสดงออกเกี่ยวกับเกมกับค่าย**อย่างตรงไปตรงมา ไม่มีการอ้อมค้อมใด ๆ เพื่อการเปลี่ยนแปลงที่ดีขึ้น** และแม้จะเริ่มเห็นทางค่ายได้ออกมารับผิดชอบหลาย ๆ อย่างแล้ว เช่น เริ่มหานักวาดจริง ๆ เพื่อเริ่มเปลี่ยนรูปเอไอทั้งหมดแล้ว **แต่ภาพลักษณ์ที่มันแย่ ๆ ก็คงต้องใช้เวลา แล้วหวังว่า OBT ที่จะมานี้ เป็นโอกาสใหม่ของค่ายอย่างคุ้มค่า** ใด ๆ แล้ว ก็คงหวังว่าความคิดเห็นทั้งหมด (ผมและคุณ Milk) จะถูกเอาไปปรับปรุงให้ดีขึ้นครับ สุดท้ายแล้ว ใครอยากพูดคุย แบ่งปันอะไร เชิญได้เลยครับ