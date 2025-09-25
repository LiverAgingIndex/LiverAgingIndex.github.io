// 多语言配置
const i18n = {
    en: {
        title: "LAI-5 and LAI-13 Liver Aging Assessment",
        subtitle: "Liver Aging Acceleration (LAA) and Liver Age Index (LAI) Calculator",
        lai5_model: "LAI-5 Model",
        lai13_model: "LAI-13 Model",
        male: "Male",
        female: "Female",
        basic_info: "Basic Information",
        age: "Chronological Age (CA, years)",
        fap: "Fat Attenuation Parameter (FAP, dB/m)",
        lsm: "Liver Stiffness Measurement (LSM, kPa)",
        bmi: "Body Mass Index (BMI, kg/m2)",
        sbp: "Systolic Blood Pressure (SBP, mmHg)",
        dbp: "Diastolic Blood Pressure (DBP, mmHg)",
        test_indicators: "Test Indicators",
        alt: "Alanine Aminotransferase (ALT, U/L)",
        ast: "Aspartate Aminotransferase (AST, U/L)",
        ggt: "Gamma-Glutamyl Transferase (GGT, U/L)",
        rpg: "Random Plasma Glucose (RPG, mg/dL)",
        tc: "Total Cholesterol (TC, mg/dL)",
        tg: "Triglycerides (TG, mg/dL)",
        hdl: "High-Density Lipoprotein (HDL, mg/dL)",
        ldl: "Low-Density Lipoprotein (LDL, mg/dL)",
        calculate: "Calculate",
        reset: "Reset",
        result_title: "Liver Aging Assessment Result",
        chronological_age: "Chronological Age (CA):",
        laa: "Liver Aging Acceleration (LAA):",
        lai: "Liver Age Index (LAI = LAA + CA):",
        years: "years",
        waiting_calculation: "Please fill in information and click calculate",
        // threshold_title: "Assessment Thresholds (based on 25th/75th percentiles)",
        // threshold_details: "LAA-5: ≤ -1.19 (slowed aging), ≥ 1.11 (accelerated aging)<br>LAA-13: ≤ -1.13 (slowed aging), ≥ 0.96 (accelerated aging)",
        disclaimer_title: "Important Notice",
        disclaimer_1: "This tool provides liver aging assessment based on statistical models and should not replace professional medical advice.",
        disclaimer_2: "Calculation results may vary with individual health conditions and laboratory methods.",
        disclaimer_3: "We do not store any user input data.",
        disclaimer_4: "评估阈值基于开发数据集中的25百分位数和75百分位数确定。",
        disclaimer_5: "Helped by AI, developed reference: 2025.Liver Aging Index: a non-invasive score for liver biological aging and liver-related outcomes in multi-cohorts.",
        slowed_aging: "Liver aging is SLOWED (better than 75% of population)",
        accelerated_aging: "Liver aging is ACCELERATED (worse than 75% of population)",
        normal_aging: "Liver aging is within NORMAL range"
    },
    zh: {
        title: "LAI-5 和 LAI-13 肝脏衰老评估",
        subtitle: "肝脏衰老加速(LAA)和肝脏年龄指数(LAI)计算器",
        lai5_model: "LAI-5 模型",
        lai13_model: "LAI-13 模型",
        male: "男性",
        female: "女性",
        basic_info: "基本信息",
        age: "实际年龄 (CA, 岁)",
        fap: "脂肪衰减参数 (FAP, dB/m)",
        lsm: "肝脏硬度 (LSM, kPa)",
        bmi: "身体质量指数 (BMI, kg/m2)",
        sbp: "收缩压 (SBP, mmHg)",
        dbp: "舒张压 (DBP, mmHg)",
        test_indicators: "检查指标",
        alt: "谷丙转氨酶 (ALT, U/L)",
        ast: "谷草转氨酶 (AST, U/L)",
        ggt: "谷氨酰转肽酶 (GGT, U/L)",
        rpg: "随机血糖 (RPG, mg/dL)",
        tc: "总胆固醇 (TC, mg/dL)",
        tg: "甘油三酯 (TG, mg/dL)",
        hdl: "高密度脂蛋白 (HDL, mg/dL)",
        ldl: "低密度脂蛋白 (LDL, mg/dL)",
        calculate: "计算",
        reset: "重置",
        result_title: "肝脏衰老评估结果",
        chronological_age: "实际年龄 (CA):",
        laa: "肝脏衰老加速 (LAA):",
        lai: "肝脏年龄指数 (LAI = LAA + CA):",
        years: "岁",
        waiting_calculation: "请填写信息并点击计算",
        // threshold_title: "评估阈值 (基于25%/75%人群百分位数)",
        // threshold_details: "LAA-5: ≤ -1.19 (衰老减速), ≥ 1.11 (衰老加速)<br>LAA-13: ≤ -1.13 (衰老减速), ≥ 0.96 (衰老加速)",
        disclaimer_title: "重要声明",
        disclaimer_1: "本工具基于统计学模型提供肝脏衰老评估，不能替代专业医疗诊断",
        disclaimer_2: "计算结果可能因个体健康状况和检测方法不同存在差异",
        disclaimer_3: "我们不会存储任何用户输入数据",
        disclaimer_4: "AI辅助开发，参考：2025.Liver Aging Index: a non-invasive score for liver biological aging and liver-related outcomes in multi-cohorts.",
        disclaimer_5: "AI辅助开发，参考：2025.Liver Aging Index: a non-invasive score for liver biological aging and liver-related outcomes in multi-cohorts.",
        slowed_aging: "肝脏衰老减速 (优于75%人群)",
        accelerated_aging: "肝脏衰老加速 (差于75%人群)",
        normal_aging: "肝脏衰老处于正常范围"
    }
};

// 语言切换功能
function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (el.tagName === 'LI') {
            el.innerHTML = i18n[lang][key];
        } else {
            el.textContent = i18n[lang][key];
        }
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化为中文
    changeLanguage('en');
    
    // 模型选择
    document.querySelectorAll('.model-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.model-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const model = this.getAttribute('data-model');
            toggleModelFields(model);
            // updateThresholdInfo(model, document.documentElement.lang === 'zh-CN' ? 'zh' : 'en');
        });
    });

    // 性别选择
    document.querySelectorAll('.gender-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.gender-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 表单提交处理
    document.getElementById('health-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const model = document.querySelector('.model-btn.active').getAttribute('data-model');
        const gender = document.querySelector('.gender-btn.active').getAttribute('data-gender');
        const lang = document.documentElement.lang === 'zh-CN' ? 'zh' : 'en';
        
        // 获取输入值
        const inputs = {
            age: parseFloat(document.getElementById('age').value),
            alt: parseFloat(document.getElementById('alt').value),
            ast: parseFloat(document.getElementById('ast').value),
            ggt: parseFloat(document.getElementById('ggt').value)
        };
        
        // 根据模型获取额外字段
        if (model === 'lai5') {
            inputs.fap = parseFloat(document.getElementById('fap').value);
            inputs.lsm = parseFloat(document.getElementById('lsm').value);
        } else {
            inputs.bmi = parseFloat(document.getElementById('bmi').value);
            inputs.sbp = parseFloat(document.getElementById('sbp').value);
            inputs.dbp = parseFloat(document.getElementById('dbp').value);
            inputs.rpg = parseFloat(document.getElementById('rpg').value);
            inputs.tc = parseFloat(document.getElementById('tc').value);
            inputs.tg = parseFloat(document.getElementById('tg').value);
            inputs.hdl = parseFloat(document.getElementById('hdl').value);
            inputs.ldl = parseFloat(document.getElementById('ldl').value);
        }
        
        // 计算LAA和LAI
        const result = calculateLAA(model, gender, inputs);
        
        // 更新结果显示
        document.getElementById('ca-result').textContent = inputs.age;
        document.getElementById('laa-result').textContent = result.laa.toFixed(2);
        document.getElementById('lai-result').textContent = result.lai.toFixed(1);
        
        // 更新风险描述
        const description = document.getElementById('risk-description');
        description.textContent = getAgingDescription(result.laa, model, lang);
        
        // 根据LAA值添加相应的CSS类
        description.className = 'risk-description';
        if (result.laa <= (model === 'lai5' ? -1.19 : -1.13)) {
            description.classList.add('slowed');
        } else if (result.laa >= (model === 'lai5' ? 1.11 : 0.96)) {
            description.classList.add('accelerated');
        }
    });
});

// 切换模型字段显示
function toggleModelFields(model) {
    if (model === 'lai5') {
        document.querySelectorAll('.lai5-only').forEach(el => el.style.display = 'block');
        document.querySelectorAll('.lai13-only').forEach(el => el.style.display = 'none');
    } else {
        document.querySelectorAll('.lai5-only').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.lai13-only').forEach(el => el.style.display = 'block');
    }
}

// 更新阈值信息
// function updateThresholdInfo(model, lang) {
//     const thresholdDetails = document.getElementById('threshold-details');
//     if (model === 'lai5') {
//         thresholdDetails.innerHTML = i18n[lang].threshold_details.split('<br>')[0];
//     } else {
//         thresholdDetails.innerHTML = i18n[lang].threshold_details.split('<br>')[1];
//     }
// }

// 重置表单
function resetForm() {
    document.getElementById('health-form').reset();
    document.getElementById('ca-result').textContent = "0";
    document.getElementById('laa-result').textContent = "0.00";
    document.getElementById('lai-result').textContent = "0.00";
    document.getElementById('risk-description').textContent = i18n[document.documentElement.lang === 'zh-CN' ? 'zh' : 'en'].waiting_calculation;
    document.getElementById('risk-description').className = 'risk-description';
}

// 获取衰老描述
function getAgingDescription(laa, model, lang) {
    if (model === 'lai5') {
        if (laa <= -1.19) {
            return i18n[lang].slowed_aging;
        } else if (laa >= 1.11) {
            return i18n[lang].accelerated_aging;
        } else {
            return i18n[lang].normal_aging;
        }
    } else {
        if (laa <= -1.13) {
            return i18n[lang].slowed_aging;
        } else if (laa >= 0.96) {
            return i18n[lang].accelerated_aging;
        } else {
            return i18n[lang].normal_aging;
        }
    }
}

// LAA计算函数
function calculateLAA(model, gender, inputs) {
    let laa = 0;
    
    if (model === 'lai5') {
        laa = calculateLAA5(gender, inputs);
    } else {
        laa = calculateLAA13(gender, inputs);
    }
    
    // 计算LAI = LAA + CA
    const lai = inputs.age + laa;
    
    return { laa, lai };
}

// LAI-5 模型计算
function calculateLAA5(gender, inputs) {
    // 男性模型计算
    if (gender === 'male') {
        const score = 0.115066198 * (inputs.age - 65.9168209074) +
                     -0.1788114109 * ((Math.log(inputs.fap) - 5.5071221923) / 0.1420367125 - (-0.0891832594)) +
                     0.1447408612 * ((Math.log(inputs.lsm) - 1.9427459692) / 0.3340647884 - (0.054902003)) +
                     -0.0629680903 * ((Math.log(inputs.alt) - 3.0325008209) / 0.5479442922 - (0.1028497724)) +
                     -0.0937019558 * ((Math.log(inputs.ast) - 3.1381081033) / 0.5452344978 - (0.0315900256)) +
                     0.3257307992 * ((Math.log(inputs.ggt) - 3.1816713962) / 0.7738010956 - (0.2334980761));
        
        const riskMOD2 = Math.exp(score);
        const riskNull2 = Math.exp(0.1169298 * (inputs.age - 65.9168209074));
        const MRDTfit = 6.023899;
        const laa = Math.log(riskMOD2 / riskNull2) / Math.log(2) * MRDTfit;
        
        return laa;
    } 
    // 女性模型计算
    else {
        const score = 0.1236448904 * (inputs.age - 64.9203855128) +
                     -0.0815917511 * ((Math.log(inputs.fap) - 5.5071221923) / 0.1420367125 - (0.0489636086)) +
                     0.1108570214 * ((Math.log(inputs.lsm) - 1.9427459692) / 0.3340647884 - (-0.0301424304)) +
                     -0.1071219575 * ((Math.log(inputs.alt) - 3.0325008209) / 0.5479442922 - (-0.0564668306)) +
                     -0.0495435376 * ((Math.log(inputs.ast) - 3.1381081033) / 0.5452344978 - (-0.0173436322)) +
                     0.2708418271 * ((Math.log(inputs.ggt) - 3.1816713962) / 0.7738010956 - (-0.128195678));
        
        const riskMOD2 = Math.exp(score);
        const riskNull2 = Math.exp(0.1270141 * (inputs.age - 64.9203855128));
        const MRDTfit = 5.605951;
        const laa = Math.log(riskMOD2 / riskNull2) / Math.log(2) * MRDTfit;
        
        return laa;
    }
}

// LAI-13 模型计算
function calculateLAA13(gender, inputs) {
    // 计算各项得分
    const score_VCTE = (Math.log(inputs.fap) - 5.507122) / 0.142037 * -0.002193 + 
                      (Math.log(inputs.lsm) - 1.942746) / 0.334065 * 0.299431;
    
    const score_Enzyme = (Math.log(inputs.alt) - 3.032501) / 0.547944 * -0.004549 + 
                        (Math.log(inputs.ast) - 3.138108) / 0.545234 * 0.110991 + 
                        (Math.log(inputs.ggt) - 3.181671) / 0.773801 * 0.615969;
    
    const score_Lipid = (Math.log(inputs.rpg) - 1.8251) / 0.30559 * 0.001042 + 
                       (Math.log(inputs.tc) - 1.591961) / 0.272531 * -0.001089 + 
                       (Math.log(inputs.tg) - 0.528817) / 0.642918 * 4.7e-05 + 
                       (Math.log(inputs.hdl) - 0.263495) / 0.348643 * -0.000186 + 
                       (Math.log(inputs.ldl) - 0.809155) / 1.554747 * -0.001038;
    
    const score_Phy = (Math.log(inputs.bmi) - 3.186939) / 0.141285 * 0.01339 + 
                     (Math.log(inputs.sbp) - 4.880212) / 0.155097 * 0.053321 + 
                     (Math.log(inputs.dbp) - 4.352143) / 0.136714 * -0.195234;
    
    // 男性模型计算
    if (gender === 'male') {
        const score = 0.1222064374 * (inputs.age - 65.9168209074) +
                     0.4883414574 * (score_VCTE - 0.0166349306) +
                     0.2922859346 * (score_Enzyme - 0.1468659071) +
                     18.5246583211 * (score_Lipid - 0.0002224992) +
                     -0.4856886885 * (score_Phy - (-0.0126545257));
        
        const riskMOD2 = Math.exp(score);
        const riskNull2 = Math.exp(0.1169298 * (inputs.age - 65.9168209074));
        const laa = Math.log(riskMOD2 / riskNull2) / Math.log(2) * 5.671937;
        
        return laa;
    } 
    // 女性模型计算
    else {
        const score = 0.129569714 * (inputs.age - 64.9203855128) +
                     0.2904189766 * (score_VCTE - (-0.0091329498)) +
                     0.200230793 * (score_Enzyme - (-0.0806326752)) +
                     62.5522194374 * (score_Lipid - (-0.0001221571)) +
                     -0.5156925707 * (score_Phy - 0.0069476183);
        
        const riskMOD2 = Math.exp(score);
        const riskNull2 = Math.exp(0.1270141 * (inputs.age - 64.9203855128));
        const laa = Math.log(riskMOD2 / riskNull2) / Math.log(2) * 5.349608;
        
        return laa;
    }
}