#include <iostream>
using namespace std;

class Date {
public:
    int day, month, year;

    Date(int d = 1, int m = 1, int y = 2000) {
        day = d;
        month = m;
        year = y;
    }

    bool is_leap(int y) const {
        return (y % 4 == 0 && y % 100 != 0) || (y % 400 == 0);
    }

    int days_in_month(int m, int y) const {
        if (m == 2) return is_leap(y) ? 29 : 28;
        if (m == 4 || m == 6 || m == 9 || m == 11) return 30;
        return 31;
    }

    Date add_days(int days_to_add) const {
        int d = day + days_to_add, m = month, y = year;

        while (d > days_in_month(m, y)) {
            d -= days_in_month(m, y);
            m++;
            if (m > 12) {
                m = 1;
                y++;
            }
        }
        return Date(d, m, y);
    }

    void display() const {
        cout << day << "-" << month << "-" << year;
    }
};

class PeriodTracker {
private:
    Date last_period_date;
    int cycle_length;

public:
    PeriodTracker(Date lpd, int cycle = 28) {
        last_period_date = lpd;
        cycle_length = cycle;
    }

    Date get_next_period() const {
        return last_period_date.add_days(cycle_length);
    }

    void get_ovulation_window() const {
        Date next_period = get_next_period();
        Date ovulation_day = next_period.add_days(-14);
        Date fertile_start = ovulation_day.add_days(-5);
        Date fertile_end = ovulation_day.add_days(1);

        cout << "Ovulation window: ";
        fertile_start.display();
        cout << " to ";
        fertile_end.display();
        cout << endl;
    }
};

int main() {
    Date last_period(2, 8, 2025);
    PeriodTracker tracker(last_period);

    cout << "Last Period Date: ";
    last_period.display();
    cout << endl;

    Date next_period = tracker.get_next_period();
    cout << "Next Period Date: ";
    next_period.display();
    cout << endl;

    tracker.get_ovulation_window();

    return 0;
}
