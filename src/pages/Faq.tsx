import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  useEffect(() => {
    document.title = "FAQ | CyberFun | Сеть серверов CS2";
  }, []);

  return (
    <div className="min-h-screen bg-black cyber-grid pb-16">
      <Navbar />
      
      <div className="pt-32 pb-16 container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white neon-glow">
            Часто задаваемые вопросы
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Всё, что вы хотели знать о серверах CyberFun
          </p>
        </div>

        <Tabs defaultValue="general" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="general" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Общее</TabsTrigger>
            <TabsTrigger value="servers" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Серверы</TabsTrigger>
            <TabsTrigger value="payment" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Оплата</TabsTrigger>
            <TabsTrigger value="technical" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Техническое</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg border border-purple-500/30 p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-purple-500/30">
                <AccordionTrigger className="text-white hover:text-purple-300">Что такое CyberFun?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  CyberFun — это сеть игровых серверов для Counter-Strike 2, предлагающая различные игровые режимы, продвинутую статистику и систему наград. Наши серверы отличаются стабильностью, низким пингом и активным сообществом.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b border-purple-500/30">
                <AccordionTrigger className="text-white hover:text-purple-300">Как начать играть на ваших серверах?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Чтобы начать играть, просто выберите сервер из списка на главной странице и нажмите "Подключиться". Вы также можете найти наши серверы в игре через поиск сообщества или добавив наш IP-адрес в избранное.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b border-purple-500/30">
                <AccordionTrigger className="text-white hover:text-purple-300">Нужно ли регистрироваться для игры?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Регистрация необязательна для базовой игры, но рекомендуется для отслеживания статистики, участия в рейтингах и получения бонусов. Регистрация выполняется через Steam-аккаунт одним кликом.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-b border-purple-500/30">
                <AccordionTrigger className="text-white hover:text-purple-300">Какие преимущества даёт VIP-статус?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  VIP-игроки получают доступ к эксклюзивным серверам, специальным командам, уникальным скинам оружия, модели игрока, теги, цветной чат и многое другое. Кроме того, VIP-статус помогает поддерживать работу серверов.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-white hover:text-purple-300">Как связаться с администрацией?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Вы можете связаться с нами через форму обратной связи на сайте, в нашем Discord-сервере или напрямую с администраторами во время игры. Мы стараемся отвечать на все вопросы в течение 24 часов.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="servers" className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg border border-purple-500/30 p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-purple-500/30">
                <AccordionTrigger className="text-white hover:text-purple-300">Какие режимы игры доступны?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  На наших серверах доступны классические режимы (Competitive, Casual, Deathmatch), а также модифицированные режимы: Retake, Surf, KZ, Bhop, Arena, AWP Only, Pistol Only и другие. Список постоянно расширяется.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b border-purple-500/30">
                <AccordionTrigger className="text-white hover:text-purple-300">Как арендовать приватный сервер?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Вы можете арендовать приватный сервер через раздел "Приватные серверы" на нашем сайте. Мы предлагаем различные конфигурации по конкурентным ценам с полным контролем настроек и поддержкой 24/7.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b border-purple-500/30">
                <AccordionTrigger className="text-white hover:text-purple-300">Где физически расположены ваши серверы?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Наши серверы расположены в нескольких датацентрах: Москва, Санкт-Петербург, Екатеринбург и Казань. Это обеспечивает низкую задержку для игроков из разных регионов России и ближнего зарубежья.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-white hover:text-purple-300">Какие анти-чит системы используются?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Мы используем комбинацию стандартного VAC от Valve и собственных анти-чит решений. Наши администраторы регулярно мониторят игровой процесс, а новейшие алгоритмы автоматически выявляют подозрительное поведение.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="payment" className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg border border-purple-500/30 p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-purple-500/30">
                <AccordionTrigger className="text-white hover:text-purple-300">Какие способы оплаты доступны?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Мы принимаем платежи через банковские карты, электронные кошельки (QIWI, YooMoney), мобильные платежи, криптовалюты (Bitcoin, Ethereum) и другие популярные платежные системы.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b border-purple-500/30">
                <AccordionTrigger className="text-white hover:text-purple-300">Сколько стоит VIP-статус?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Стоимость VIP-статуса зависит от продолжительности: 299 рублей за 1 месяц, 799 рублей за 3 месяца, 1499 рублей за 6 месяцев и 2499 рублей за год. Мы регулярно проводим акции со скидками.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b border-purple-500/30">
                <AccordionTrigger className="text-white hover:text-purple-300">Можно ли вернуть деньги?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Мы рассматриваем заявки на возврат средств в индивидуальном порядке. Если услуга не была активирована или имеются технические проблемы на нашей стороне, возврат производится в полном объеме.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-white hover:text-purple-300">Есть ли система бонусов?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Да, у нас действует система бонусов и кешбэка. За каждое пополнение вы получаете бонусные баллы, которые можно использовать для продления VIP-статуса, приобретения скинов или других внутриигровых предметов.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="technical" className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg border border-purple-500/30 p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-purple-500/30">
                <AccordionTrigger className="text-white hover:text-purple-300">Что делать, если я не могу подключиться к серверу?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  В первую очередь проверьте ваше интернет-соединение и настройки брандмауэра. Убедитесь, что у вас установлена последняя версия игры. Если проблема не решается, обратитесь в нашу техподдержку с описанием проблемы.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b border-purple-500/30">
                <AccordionTrigger className="text-white hover:text-purple-300">Какие минимальные требования для игры?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Требования соответствуют официальным требованиям CS2: процессор Intel Core i5 или лучше, 8 ГБ RAM, видеокарта с поддержкой DirectX 11 и 4 ГБ видеопамяти, и стабильное интернет-соединение от 10 Мбит/с.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b border-purple-500/30">
                <AccordionTrigger className="text-white hover:text-purple-300">Как настроить автоматическое подключение к серверу?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Вы можете добавить наши серверы в избранное прямо из игры или использовать наш лаунчер. Также можно создать ярлык с параметрами запуска для прямого подключения к выбранному серверу.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-white hover:text-purple-300">Поддерживаете ли вы моды и плагины?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Да, на наших серверах установлены различные плагины для расширения игрового процесса. Мы постоянно тестируем новые моды и добавляем те, которые нравятся сообществу и не нарушают баланс игры.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 neon-glow">Не нашли ответ на свой вопрос?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нашей службой поддержки, и мы постараемся помочь вам в кратчайшие сроки.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://discord.gg/cyberfun" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md neon-border">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M9 9v6M15 9v6M7 3v2M17 3v2M3 7h18M6 7v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"></path>
              </svg>
              Discord
            </a>
            <a href="mailto:support@cyberfun.gg" className="inline-flex items-center border border-purple-500 text-purple-400 hover:bg-purple-500/20 py-2 px-4 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              E-mail
            </a>
          </div>
        </div>
      </div>

      {/* Футер */}
      <footer className="container mx-auto px-4 text-center text-gray-400 text-sm">
        <div className="border-t border-purple-500/20 pt-8 pb-16">
          <p>© 2025 CyberFun. Все права защищены.</p>
          <p className="mt-2">
            <a href="#" className="text-purple-400 hover:text-purple-300 mx-2">Политика конфиденциальности</a>
            <a href="#" className="text-purple-400 hover:text-purple-300 mx-2">Правила использования</a>
            <a href="#" className="text-purple-400 hover:text-purple-300 mx-2">Контакты</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Faq;
