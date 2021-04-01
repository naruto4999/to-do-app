function TodosHeader() {
    const date = new Date();
    const day = date.getDate();
    const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()];
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ][date.getMonth()];

    const enOrdinalRules = new Intl.PluralRules("en", { type: "ordinal" });
    const enOrdinalRulesMap = {
        one: "st",
        two: "nd",
        few: "rd",
        other: "th",
    };
    const enOrdinalSuffix = enOrdinalRulesMap[enOrdinalRules.select(day)];

    return (
        <header
            className={`bg-todo-header-img bg-cover bg-center border-b-1 border-gray-300 `}
            data-testid="todos-header-bg"
        >
            <div className="bg-white px-4 py-6 bg-opacity-40">
                <h1 className="text-2xl text-black" data-testid="calendar-date">
                    {`${weekDay}, ${day}${enOrdinalSuffix}`}
                </h1>
                <p className="pt-1 text-lg text-black-100" data-testid="calendar-month">
                    {month}
                </p>
            </div>
        </header>
    );
}

export default TodosHeader;
