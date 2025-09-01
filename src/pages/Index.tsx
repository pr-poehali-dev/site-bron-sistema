import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [armorConfig, setArmorConfig] = useState({
    threat_level: '',
    weight_limit: [15],
    coverage_area: '',
    mobility_requirement: [7],
    budget: [100000]
  });

  const [recommendation, setRecommendation] = useState<any>(null);

  const handleCalculate = () => {
    const configs = {
      'high': {
        name: 'TITAN-X Экзоскелет',
        protection: 95,
        weight: 25,
        mobility: 8,
        cost: 250000,
        materials: ['Графеновые пластины', 'Керамические вставки', 'Нанотрубки'],
        features: ['ИИ-система', 'Автономное питание', 'Климат-контроль']
      },
      'medium': {
        name: 'SHIELD Pro Костюм',
        protection: 85,
        weight: 12,
        mobility: 9,
        cost: 120000,
        materials: ['Кевларовые волокна', 'Титановые пластины', 'Полимеры'],
        features: ['Модульность', 'Быстрый монтаж', 'Влагозащита']
      },
      'low': {
        name: 'GUARD Lite Жилет',
        protection: 70,
        weight: 6,
        mobility: 10,
        cost: 50000,
        materials: ['Баллистический нейлон', 'Керамика', 'Пена EVA'],
        features: ['Легкость', 'Гибкость', 'Воздухопроницаемость']
      }
    };

    const level = armorConfig.threat_level as keyof typeof configs;
    if (level && configs[level]) {
      setRecommendation(configs[level]);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">ARMOR TECH</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-primary transition-colors">Технологии</a>
              <a href="#calculator" className="hover:text-primary transition-colors">Калькулятор</a>
              <a href="#" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button variant="ghost" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background"></div>
        <div className="container mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            РАЗРАБОТКА
            <span className="text-primary block animate-glow">БУДУЩЕГО</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Передовые технологии защиты с использованием наноматериалов, 
            ИИ-систем и квантовых разработок
          </p>
          <Button size="lg" className="text-lg px-8 py-4">
            <Icon name="Zap" size={20} className="mr-2" />
            Подобрать броню
          </Button>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-6 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наши технологии</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <CardTitle>Нанокомпозиты</CardTitle>
                <CardDescription>
                  Революционные материалы на основе углеродных нанотрубок
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="/img/1801889c-544e-4bc2-a2a2-94cefbf6b836.jpg" 
                  alt="Наноматериалы" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-muted-foreground">
                  Увеличение прочности до 400% при снижении веса на 60%
                </p>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Cpu" size={24} className="text-primary" />
                </div>
                <CardTitle>ИИ-Системы</CardTitle>
                <CardDescription>
                  Адаптивная защита с машинным обучением
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="/img/1172820f-bbc2-4bc7-8178-d0caad6f9b61.jpg" 
                  alt="ИИ броня" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-muted-foreground">
                  Автоматическое усиление защиты в зонах повышенной угрозы
                </p>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Atom" size={24} className="text-primary" />
                </div>
                <CardTitle>Квантовые слои</CardTitle>
                <CardDescription>
                  Энергопоглощающие квантовые структуры
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="/img/e59a7907-1eca-4069-a8ba-fbd9ce79dedb.jpg" 
                  alt="Квантовые технологии" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-muted-foreground">
                  Рассеивание кинетической энергии на молекулярном уровне
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 px-6" id="calculator">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Калькулятор подбора брони</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Settings" size={24} className="mr-2" />
                  Параметры заказчика
                </CardTitle>
                <CardDescription>
                  Укажите требования для подбора оптимального решения
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="threat-level">Уровень угрозы</Label>
                  <Select onValueChange={(value) => setArmorConfig({...armorConfig, threat_level: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите уровень" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Низкий (городская среда)</SelectItem>
                      <SelectItem value="medium">Средний (конфликтные зоны)</SelectItem>
                      <SelectItem value="high">Высокий (боевые действия)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Максимальный вес: {armorConfig.weight_limit[0]} кг</Label>
                  <Slider
                    value={armorConfig.weight_limit}
                    onValueChange={(value) => setArmorConfig({...armorConfig, weight_limit: value})}
                    min={5}
                    max={30}
                    step={1}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Требования к мобильности: {armorConfig.mobility_requirement[0]}/10</Label>
                  <Slider
                    value={armorConfig.mobility_requirement}
                    onValueChange={(value) => setArmorConfig({...armorConfig, mobility_requirement: value})}
                    min={1}
                    max={10}
                    step={1}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Бюджет: ${armorConfig.budget[0].toLocaleString()}</Label>
                  <Slider
                    value={armorConfig.budget}
                    onValueChange={(value) => setArmorConfig({...armorConfig, budget: value})}
                    min={25000}
                    max={500000}
                    step={5000}
                    className="mt-2"
                  />
                </div>

                <Button onClick={handleCalculate} className="w-full" size="lg">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать рекомендацию
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Target" size={24} className="mr-2" />
                  Рекомендация
                </CardTitle>
                <CardDescription>
                  Персонализированное решение под ваши требования
                </CardDescription>
              </CardHeader>
              <CardContent>
                {recommendation ? (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{recommendation.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <Badge variant="outline">
                          Защита: {recommendation.protection}%
                        </Badge>
                        <Badge variant="outline">
                          Вес: {recommendation.weight} кг
                        </Badge>
                        <Badge variant="outline">
                          Мобильность: {recommendation.mobility}/10
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-primary">
                          ${recommendation.cost.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">Стоимость</div>
                      </div>
                      <div className="bg-accent/10 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-accent">
                          {recommendation.materials.length}
                        </div>
                        <div className="text-sm text-muted-foreground">Материала</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Материалы:</h4>
                      <div className="flex flex-wrap gap-2">
                        {recommendation.materials.map((material: string, index: number) => (
                          <Badge key={index} variant="secondary">
                            {material}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Особенности:</h4>
                      <div className="space-y-2">
                        {recommendation.features.map((feature: string, index: number) => (
                          <div key={index} className="flex items-center">
                            <Icon name="CheckCircle" size={16} className="text-primary mr-2" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full" size="lg">
                      <Icon name="MessageCircle" size={20} className="mr-2" />
                      Связаться с экспертом
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <Icon name="Shield" size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Укажите параметры для получения персонализированной рекомендации</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold text-primary mb-4">ARMOR TECH</div>
          <p className="text-muted-foreground mb-6">
            Революционные решения в области защитных технологий
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm">
              <Icon name="Mail" size={16} className="mr-2" />
              Контакты
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="FileText" size={16} className="mr-2" />
              Документация
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Users" size={16} className="mr-2" />
              О компании
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;