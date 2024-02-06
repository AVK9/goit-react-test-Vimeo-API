Кінопошук Створи базову маршрутизацію для застосунку пошуку і зберігання
фільмів. Прев'ю робочого застосунку дивись за посиланням.

themoviedb.org API

// Деталі API https://developer.themoviedb.org/docs

Ключ API d57670f3119ef47981c09cbf1cb3d2d1 Токен доступу для читання API
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTc2NzBmMzExOWVmNDc5ODFjMDljYmYxY2IzZDJkMSIsInN1YiI6IjY1ODJhNGVjNTViYzM1NTcxNTE3YjQ0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FGASUnS6pTqDNKCG13-tA5RbW9nYFMwY9-2qdwNpLWo
////

Для бекенду використовуй themoviedb.org API. Необхідно зареєструватися (можна
ввести довільні дані) та отримати API-ключ. У цій роботі будуть
використовуватися наступні ендпоінти.

/trending/get-trending список найпопулярніших фільмів на сьогодні для створення
колекції на головній сторінці. /search/search-movies пошук фільму за ключовим
словом на сторінці фільмів. /movies/get-movie-details запит повної інформації
про фільм для сторінки кінофільму. /movies/get-movie-credits запит інформації
про акторський склад для сторінки кінофільму. /movies/get-movie-reviews запит
оглядів для сторінки кінофільму. Посилання на документацію

Маршрути У застосунку повинні бути такі маршрути. Якщо користувач зайшов за
неіснуючим маршрутом, його необхідно перенаправляти на домашню сторінку.

'/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
'/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
'/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією
про кінофільм. /movies/:movieId/cast – компонент Cast, інформація про акторський
склад. Рендериться на сторінці MovieDetails. /movies/:movieId/reviews –
компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.
Code Splitting (поділ коду) Додай асинхронне завантаження JS-коду для маршрутів
застосунку, використовуючи React.lazy() і Suspense.
