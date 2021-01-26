describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  // it('should have welcome screen', async () => {
  //   await expect(element(by.id('RegistrationPresenter'))).toBeVisible();
  // });

 it('Просмотр экрана', async ()=> {
 await expect(element(by.id('buttonRegistrateRegistrationView'))).toBeVisible(); 
 });

 it("Валидная регистрация", async () => {
  await element(by.id("inputNameView")).typeText("IhorB");
  await element(by.id("inputPasswordView")).typeText("1234");
  await element(by.id("inputPinView")).typeText("1234");
  await element(by.id("inputphoneView")).typeText("380996543232");
  await element(by.id("inputemailView")).typeText("test@gmail.ru");
  await element(by.id('buttonRegistrateRegistrationView')).tap();
});
it('Отображение кнопки "Добавить"', async ()=> {
  await expect(element(by.id('buttonAddTodoTodosView'))).toBeVisible();
});
it('Нажатие кнопки "Добавить"', async ()=> {
  await element(by.id('buttonAddTodoTodosView')).tap();
});
it("Первая запись", async () => {
  await element(by.id('buttonAddTodoTodosView')).tap();
  await element(by.id("inputTitleAddTodoView")).typeText("test1");
  await element(by.id("inputBodyAddTodoView")).typeText("test2");
  await element(by.id("buttonSaveAddTodoView")).tap();
});
it("Вторая запись", async () => {
  await element(by.id('buttonAddTodoTodosView')).tap();
  await element(by.id("inputTitleAddTodoView")).typeText("test2");
  await element(by.id("inputBodyAddTodoView")).typeText("test2");
  await element(by.id("buttonSaveAddTodoView")).tap();
});
it("Третья запись", async () => {
  await element(by.id('buttonAddTodoTodosView')).tap();
  await element(by.id("inputTitleAddTodoView")).typeText("test3");
  await element(by.id("inputBodyAddTodoView")).typeText("test2");
  await element(by.id("buttonSaveAddTodoView")).tap();
});
it("Четвёртая запись", async () => {
  await element(by.id('buttonAddTodoTodosView')).tap();
  await element(by.id("inputTitleAddTodoView")).typeText("test4");
  await element(by.id("inputBodyAddTodoView")).typeText("test2");
  await element(by.id("buttonSaveAddTodoView")).tap();
});
it("Пятая запись", async () => {
  await element(by.id('buttonAddTodoTodosView')).tap();
  await element(by.id("inputTitleAddTodoView")).typeText("test5");
  await element(by.id("inputBodyAddTodoView")).typeText("test2");
  await element(by.id("buttonSaveAddTodoView")).tap();
});
it("Шестая запись", async () => {
  await element(by.id('buttonAddTodoTodosView')).tap();
  await element(by.id("inputTitleAddTodoView")).typeText("test6");
  await element(by.id("inputBodyAddTodoView")).typeText("test2");
  await element(by.id("buttonSaveAddTodoView")).tap();
});
it("Седьмая запись", async () => {
  await element(by.id('buttonAddTodoTodosView')).tap();
  await element(by.id("inputTitleAddTodoView")).typeText("test7");
  await element(by.id("inputBodyAddTodoView")).typeText("test2");
  await element(by.id("buttonSaveAddTodoView")).tap();
});
it("Восьмая запись", async () => {
  await element(by.id('buttonAddTodoTodosView')).tap();
  await element(by.id("inputTitleAddTodoView")).typeText("test8");
  await element(by.id("inputBodyAddTodoView")).typeText("test2");
  await element(by.id("buttonSaveAddTodoView")).tap();
});
it("Скролл", async () => {
  await element(by.id('snippetListTodosView')).scroll(100, 'down');
});
});
