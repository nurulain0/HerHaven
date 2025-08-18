// cpp-modules/cycle_prediction.cpp
#include <vector>
#include <cmath>

class CyclePredictor {
private:
    std::vector<int> previous_cycles;
    double average_cycle;
    
public:
    CyclePredictor(const std::vector<int>& cycles) : previous_cycles(cycles) {
        calculate_average();
    }
    
    void calculate_average() {
        double sum = 0;
        for(int cycle : previous_cycles) {
            sum += cycle;
        }
        average_cycle = sum / previous_cycles.size();
    }
    
    int predict_next_period(int current_day) {
        return static_cast<int>(std::round(average_cycle - current_day));
    }
    
    std::pair<int, int> predict_fertile_window() {
        int ovulation_day = static_cast<int>(std::round(average_cycle / 2));
        return {ovulation_day - 3, ovulation_day + 2};
    }
};